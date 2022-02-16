import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';

const ImageUpload = (props) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const UploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Images');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/tolivas/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const File = await res.json();

    console.log(File.secure_url);
    setImage(File.secure_url);
    props.setPhoto(File.secure_url);
    props.setEditPhoto(File.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <FormGroup>
        <Input
          type="file"
          name="file"
          placeholder="Upload image here"
          onChange={UploadImage}
        />
        <br />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: '300px' }} />
        )}
      </FormGroup>
    </div>
  );
};

export default ImageUpload;
