import {useEffect, useState} from "react";

export const useMenuPath = (path: string): {
    selectedKeyPaths: string[],
    openKeyPaths: string[]
} => {
    const [selectedKeyPaths, setSelectedKeyPaths] = useState<string[]>([])
    const [openKeyPaths, setOpenKeyPaths] = useState<string[]>([])

    useEffect(() => {
        if (path) {
            const pathSegments = path.split('/').filter((i) => i);

            const lastSegment = pathSegments.pop();
            const restSegment = pathSegments
            setSelectedKeyPaths([`/${lastSegment}`])
            setOpenKeyPaths(restSegment.map(element => {
                return "/" + element
            }))
        }

    }, [path])

    return {selectedKeyPaths, openKeyPaths};
}
