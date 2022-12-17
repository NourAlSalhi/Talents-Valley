import React from 'react'
import { Label } from '../../../hooks/HookForm/Input/style';
import { Upload, UploadFill } from './FileStyle';
const File = (props) => {
    const handleFieldReset = (field) => {
        props.resetField(field)
    }
    return (
        <div>
            {!props.watch('file') || props.watch('file').length === 0 ? (
                <Upload>
                    <input type="file" id="fileupload" {...props.register('file')} style={{ display: 'none' }} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">
                        <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
                        <path d="M15 7l-5-6-5 6h4v8h2V7h4z" />
                    </svg>
                    <label htmlFor="fileupload">Upload a File</label>
                    {props.errors.file && <p className="error">{props.errors.file.message}</p>}
                </Upload>
            ) : (
                <UploadFill>
                    <input type="file" id="fileupload" {...props.register('file')} style={{ display: 'none' }} />
                    <Label htmlFor="fileupload" style={{ position: "relative" }}>
                        <div style={{ position: "absolute", marginLeft: '60px' }}>
                            <p style={{ color: 'black', fontSize: '18px' }}>{props.watch('file')[0].name}</p>
                            <p style={{ color: 'black', fontSize: '12px', fontWeight: '400', marginTop: '2px' }}>{(props.watch('file')[0].size / 1000000).toFixed(2) + 'Mb size'}</p>
                        </div>
                    </Label>
                    <div className='icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20" style={{ margin: '8px 17px' }}>
                            <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
                            <path d="M15 7l-5-6-5 6h4v8h2V7h4z" />
                        </svg>
                        <button style={{ background: 'none', border: 'none' }} onClick={() => handleFieldReset('file')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" style={{ marginTop: '10px' }}
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" /></svg>
                        </button>
                    </div>
                    {props.errors.file && <div className="errors" style={{ color: "red", paddingTop: "20px" }}>{props.errors.file.message}</div>}
                </UploadFill>
            )}
        </div>
    )
}

export default File