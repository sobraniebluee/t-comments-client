import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {Api} from "../api/api";
import MainLayout from "../layouts/MainLayout";

interface IUser {
    name: string
}

interface ITest {
    data: IUser[]
}

interface UserProps extends IUser {
    id:number,
    onClick:(name: string) => void
}

const User: React.FC<UserProps> = React.memo(({id, name, onClick}) => {
    // const random = React.useCallback(
    //     () => `${name}: 10`,
    //     [name])
    React.useEffect(() => {
        console.log("Render", id)
    }, [])
    return (
        <li style={{margin: "20px 0"}}>
            <button onClick={() => onClick(name)}>
                <span>{id}.{name}</span>
            </button>
        </li>
    );
})

User.displayName = "User"

const Test: NextPage<ITest> = ({data}) => {
    const [users, setUsers] = React.useState<IUser[]>(data)
    // const listRef = React.useRef<HTMLUListElement>(null)
    const handlerClick = (name) => window.alert(name);
    const addElement = () => {
        let obj = {name:"New Element"}
        setUsers(prevState => [...prevState, obj])
    }

    return (
        <MainLayout>
            <h1>Test</h1>

            <button onClick={addElement}>
                Add element
            </button>
            <ul>
                {
                    users.length > 0 && users.map((item,index) => (
                        <User key={index}
                              id={index}
                              onClick={handlerClick}
                              name={item.name}

                        />
                        )
                    )

                }
            </ul>

        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps<ITest> = async (ctx) => {
    return {
        props: {
            data: [{name:"dima"}, {name:"Nazar"}, {name:"No_Homo"}]
        }
    }
}


export default Test;