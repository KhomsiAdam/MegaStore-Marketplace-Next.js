import React, { useEffect, useState } from "react";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
export const UploadFiles = ({
  limit,
  message,
  handleChange,
}: {
  limit: number;
  message: string;
  handleChange: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {    
    handleChange(files);
  }, [files]);

  return (
    <div className="App">
      <FilePond
        className="flex"
        files={files}
        //@ts-ignore
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={limit}
        name="files"
        labelIdle={`${message} <span class="filepond--label-action">Browse</span>`}
      />
    </div>
  );
};
