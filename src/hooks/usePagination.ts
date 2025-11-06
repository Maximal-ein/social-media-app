import {useMemo} from "react";

type UsePagination = (totalPages?: number) => number[];

export const usePagination: UsePagination = (totalPages = 1) => {
    return useMemo(() => {
        const pagesArray: number[] = []
        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1)
        }
        return pagesArray
    }, [totalPages])
}