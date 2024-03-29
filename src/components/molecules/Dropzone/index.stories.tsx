import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Dropzone from './index'
import Button from 'components/atoms/Button'
import Box from 'components/layout/Box'


export default {
    title: 'Molecules/Dropzone',
    component: Dropzone,
    argTypes: {
        height: {
            control: {type: 'number'},
            description: '높이',
            table: {summary: 'number'},
        },
        width: {
            control: {type: 'number'},
            description: '너비',
            table: {summary: 'number'},
        },
        hasError: {
            control: {type: 'boolean'},
            defaultValue: false,
            description: '변형 에러 플래그',
            table: {summary: 'boolean'},
        },
        acceptedFileTypes: {
            control: {type: 'array'},
            description: '받은 파일 타입',
            table: {summary: 'array'},
        },
        onDrop: {
            description: '파일이 드롭 입력됐을 떄의 이벤트 핸들러',
            table: {summary: 'function'},
        },
        onChange: {
            description: '파일이 입력됐을 떄의 이벤트 핸들러',
            table: {summary: 'function'},
        },
    },
}

const Template = (args) => {
    const [files, setFiles] = useState<File[]>([])
    const handleDrop = (files: File[]) => {
        setFiles(files)
        args && args.onDrop && args.onDrop(files)
    }

    const fetchData = async () => {
        const res = await fetch('https://storybook.js.org/images/bubbles.jpg')
        const blob = await res.blob()
        const file = new File([blob], '1.png', blob)

        setFiles([...files, file])
    }

    const clearImages = () => {
        setFiles([])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Box marginBottom={1}>
                <Dropzone {...args} value={files} onDrop={handleDrop}/>
            </Box>
            <Box marginBottom={1}>
                <Button onClick={fetchData}>이미지를 추가</Button>
            </Box>
            <Box marginBottom={2}>
                <Button onClick={clearImages}>모든 이미지를 클리어</Button>
            </Box>
            <Box>
                {files.map((f, i) => (
                    <Image
                        src={URL.createObjectURL(f)}
                        width={100}
                        height={100}
                        key={i}
                        alt="sample"
                    />
                ))}
            </Box>
        </>
    )
}

export const WithControl = Template.bind({
    args: {
        height: 200,
        width: '100%',
        acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
        hasError: false,
    },
})