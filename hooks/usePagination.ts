import React from "react";
import {IPagination, PaginationResponse} from "../utils/types";

interface ReturnValue<T> { items: T[], isLoading:  boolean}

interface usePaginationProps<T> {
    fetchCallback: (page: number, ...rest: any) => Promise<PaginationResponse<T[]> | null>,
    initialPagination?: IPagination | null,
    initialItems?: T[],
    initParamsFetch?: any[],
    initLoad?: boolean
}

/**
 *
 * @template T
 * @param {T} - is a generic type for initialState and result
 * @param {(page: number, ...rest: any) => void} fetchCallback
 * @param {T[] | null} initialPagination
 * @param initialItems
 * @param paramsIntoFetchCb
 * @return {{items: T[], isLoading: boolean}}
 */

// Custom hook for pagination,
// it uses callback function for fetch data
// Always first param for callback must be currentPage: number

export const useScrollPagination = <T>({initialPagination, initialItems, fetchCallback, initLoad, initParamsFetch = []}: usePaginationProps<T>): ReturnValue<T> => {
    const [items, setItems] = React.useState<T[]>()
    const [pagination, setPaginationData] = React.useState<IPagination | null>(null)
    const [currentPage, setCurrentPage] = React.useState<number>()
    const [isLoading, setLoading] = React.useState<boolean>(false)
    const [fetchNextPage, setFetchNextPage] = React.useState<boolean>()
    const [paramsFetch, setParamsFetch] = React.useState<any[]>()

    React.useEffect(() => {
        // console.log("reload" ,fetchNextPage && currentPage < (pagination?.total_pages! || 1))
        if (fetchNextPage && currentPage < (pagination?.total_pages! || 1)) {
            // console.log("Fetch", ...paramsIntoFetchCb)
            setLoading(true)
            fetchCallback(currentPage + 1, ...paramsFetch).then((res) => {
                if (res) {
                    setItems(prevState => [...prevState, ...res.items])
                    setCurrentPage(prevState => prevState + 1)
                    setPaginationData(res.pagination)
                }
                setLoading(false)
                setFetchNextPage(false)
            })
        }
    }, [fetchNextPage])

    const windowScrollHandler = () => {
        let windowHeight = document.body.offsetHeight - window.innerHeight - 300
        let scrollHeight = window.scrollY
        if (windowHeight <= scrollHeight) {
            setFetchNextPage(true)
        }
    }

    React.useEffect(() => {
        setItems(initialItems || [])
        setPaginationData(initialPagination || null)
        setCurrentPage(initialPagination?.current_page || (initLoad ? 0 : 1))
        setFetchNextPage((initLoad && !initialItems) || false)
        setParamsFetch(initParamsFetch || [])
        window.addEventListener('scroll', windowScrollHandler)
    }, [initialItems, initialPagination, initLoad])

    return {items, isLoading}
}


export default useScrollPagination