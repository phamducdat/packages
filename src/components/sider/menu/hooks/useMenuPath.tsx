import {useEffect, useState} from "react";

export const useMenuPath = (path: string): {
    selectedKeys: string[],
    openKeys: string[]
} => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const [openKeys, setOpenKeys] = useState<string[]>([])

    useEffect(() => {
        if (path) {
            const pathSegments = path.split('/').filter((i) => i);

            const lastSegment = pathSegments.pop();
            const restSegment = pathSegments
            setSelectedKeys([`/${lastSegment}`])
            setOpenKeys(restSegment.map(element => {
                return "/" + element
            }))
        }

    }, [path])

    return {selectedKeys, openKeys};
}
