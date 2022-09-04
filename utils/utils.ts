import {dataComments} from "./consts";
import {IComment} from "./types";

export const getRandomColor = () => {
    const COLORS = ["#552993", "#a818d0", "#2e82ff", "rgba(0,230,255,0.93)", "#513252", "#7A4069", "#CA4E79", "#FFC18E"]
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}

export const countCommentsDepth = (root: IComment[]) => {
    let count = 0
    const wrap = (root: IComment[]) => {
        for (let i = 0; i < root.length; i++) {
            let temp = root[i].answers
            count++
            wrap(temp)
        }
    }
    wrap(root)
    return count
}

