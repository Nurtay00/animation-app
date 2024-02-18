import Layout from "../shared/Layout";
import Controller from "../components/Controller/Controller";
import EditSpace from "../components/EditSpace/EditSpace";
import React, {useEffect, useState} from "react";
import {initialData} from "./initialData";

const Edit = () => {

    const [data, setData] = useState(initialData)
    const [selectedId, selectShape] = React.useState<any>(null);

    const checkDeselect = (e: any) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('animation')) {
            setData(JSON.parse(localStorage.getItem('animation') ?? ''))
        }
    }, [])

    useEffect(() => {
        const handler = setTimeout(() => {
                localStorage.setItem('animation', JSON.stringify(data))
            }, 500
        )
        return () => clearTimeout(handler)

    }, [selectedId])


    return <Layout>
        <EditSpace selectedId={selectedId}
                   checkDeselect={checkDeselect}
                   selectShape={selectShape}
                   data={data}
                   setData={setData}/>
        <Controller setShape={selectShape} shape={selectedId} selectedId={selectedId}/>
    </Layout>
}

export default Edit