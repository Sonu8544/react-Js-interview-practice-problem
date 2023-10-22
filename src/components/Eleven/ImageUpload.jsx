import React, { useState } from 'react';

const ImageUpload = () => {
    const [file, setFile] = useState(null);

    const handleImage = (e) => {
        const imageupload = e.target.files[0];
        if (imageupload) {
            setFile(imageupload)
        }
    }

    return (
        <>
            <h1>image uploaded...</h1>
            <input type="file" accept="image/*" onChange={handleImage} />
            {file && <img src={URL.createObjectURL(file)} alt='img' />}
        </>
    );
}

export default ImageUpload;
