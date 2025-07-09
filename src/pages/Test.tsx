// // import React, { useRef } from 'react';
// // import JoditEditor from 'jodit-react';

// // interface Props {
// //   value: string;
// //   onChange: (newContent: string) => void;
// // }

// // // Replace with your actual Cloudinary details
// // const CLOUDINARY_UPLOAD_PRESET = 'sosioloji';
// // const CLOUDINARY_CLOUD_NAME = 'dunid4t4g';

// // const JoditEditorComponent: React.FC<Props> = ({ value, onChange }) => {
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   const config = {
// //       height: 800, 
// //     readonly: false,
// //     uploader: {
// //       insertImageAsBase64URI: true,
// //       url: '', // disables default upload prompt
// //     },
// //     buttons: [
// //       'bold', 'italic', 'underline', '|',
// //       'ul', 'ol', '|',
// //       'link', '|',
// //       'align', 'undo', 'redo', '|',
// //       {
// //         name: 'uploadImageCustom',
// //         iconURL: 'https://img.icons8.com/ios/24/upload.png',
// //         exec: () => inputRef.current?.click(),
// //         tooltip: 'Upload Image',
// //       }
// //     ],
// //   };

// //   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

// //     try {
// //       const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       const data = await res.json();
// //       const url = data.secure_url;

// //       console.log('✅ Uploaded image:', url);

// //       // ✅ Insert image by updating the value
// //       const imgHTML = `<img src="${url}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`;
// //       onChange(value + imgHTML); // append image HTML

// //     } catch (err) {
// //       console.error('❌ Image upload failed:', err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <JoditEditor
// //         value={value}
// //         config={config}
// //         tabIndex={1}
// //         onBlur={(newContent) => onChange(newContent)}
// //       />
// //       <input
// //         ref={inputRef}
// //         type="file"
// //         accept="image/*"
// //         hidden
// //         onChange={handleImageUpload}
// //       />
// //     </div>
// //   );
// // };

// // export default JoditEditorComponent;


// import React, { useRef } from 'react';
// import JoditEditor from 'jodit-react';

// interface Props {
//   value: string;
//   onChange: (newContent: string) => void;
// }

// // Cloudinary Config
// const CLOUDINARY_UPLOAD_PRESET = 'sosioloji';
// const CLOUDINARY_CLOUD_NAME = 'dunid4t4g';

// const JoditEditorComponent: React.FC<Props> = ({ value, onChange }) => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const config = {
//     height: 600,
//     readonly: false,
//     toolbarAdaptive: false,
//     toolbarSticky: false,
//     buttons: [
//       'source', 'fullsize', '|',
//       'paragraph', 'fontsize', 'font', '|',
//       'bold', 'italic', 'underline', 'strikethrough', '|',
//       'superscript', 'subscript', '|',
//       'ul', 'ol', '|',
//       'outdent', 'indent', '|',
//       'align', '|',
//       'hr', 'table', '|',
//       'link', 'image', 'video', '|',
//       'brush', '|',
//       'undo', 'redo', '|',
//       'print', 'about', '|',
      
//       {
//         name: 'uploadImageCustom',
//         iconURL: 'https://img.icons8.com/ios/24/upload.png',
//         exec: () => inputRef.current?.click(),
//         tooltip: 'Upload Image',
//       },
//     ],
//     style: `
//     h1 { font-size: 2rem; font-weight: bold; margin: 1em 0; }
//     h2 { font-size: 1.75rem; font-weight: bold; margin: 0.9em 0; }
//     h3 { font-size: 1.5rem; font-weight: bold; margin: 0.8em 0; }
//     h4 { font-size: 1.25rem; font-weight: bold; margin: 0.7em 0; }
//     h5 { font-size: 1rem; font-weight: bold; margin: 0.6em 0; }
//     h6 { font-size: 0.875rem; font-weight: bold; margin: 0.5em 0; }
//   `,
//     uploader: {
//       insertImageAsBase64URI: true,
//     },
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();
//       const url = data.secure_url;

//       const imgHTML = `<img src="${url}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`;
//       onChange(value + imgHTML);

//     } catch (err) {
//       console.error('❌ Image upload failed:', err);
//     }
//   };

//   return (
//     <div>
//       <JoditEditor
//         value={value}
//         config={config}
//         tabIndex={1}
//         onBlur={(newContent) => onChange(newContent)}
//       />
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         hidden
//         onChange={handleImageUpload}
//       />
//     </div>
//   );
// };

// export default JoditEditorComponent;



// import React, { useEffect, useRef } from 'react';
// import JoditEditor from 'jodit-react';

// interface Props {
//   value: string;
//   onChange: (newContent: string) => void;
// }

// const CLOUDINARY_UPLOAD_PRESET = 'sosioloji';
// const CLOUDINARY_CLOUD_NAME = 'dunid4t4g';

// const JoditEditorComponent: React.FC<Props> = ({ value, onChange }) => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const editorRef = useRef<any>(null); // Optional

//   const config = {
//     height: 600,
//     readonly: false,
//     iframe: false,
//     toolbarSticky: false,
//     buttons: [
//       'source', 'fullsize', '|',
//       'paragraph', 'fontsize', 'font', '|',
//       'bold', 'italic', 'underline', 'strikethrough', '|',
//       'ul', 'ol', '|',
//       'outdent', 'indent', '|',
//       'align', 'hr', '|',
//       'link', 'image', 'video', '|',
//       'brush', 'cut', 'copy', 'paste', '|',
//       'undo', 'redo', '|',
//       'removeformat', 'selectall', '|',
//       {
//         name: 'uploadImageCustom',
//         iconURL: 'https://img.icons8.com/ios/24/upload.png',
//         exec: () => inputRef.current?.click(),
//         tooltip: 'Upload Image',
//       }
//     ],
//   };

//   useEffect(() => {
//     const editorContainer = document.querySelector('.jodit-wysiwyg');
//     if (editorContainer) {
//       const style = document.createElement('style');
//       style.innerHTML = `
//         h1 { font-size: 2rem; font-weight: bold; margin: 1rem 0; color: #111; }
//         h2 { font-size: 1.5rem; font-weight: bold; margin: 0.75rem 0; color: #222; }
//         h3 { font-size: 1.25rem; font-weight: bold; margin: 0.5rem 0; color: #333; }
//         h4, h5, h6 { font-weight: bold; color: #444; }
//       `;
//       editorContainer.appendChild(style);
//     }
//   }, []);

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();
//       const url = data.secure_url;

//       const imgHTML = `<img src="${url}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`;
//       onChange(value + imgHTML);
//     } catch (err) {
//       console.error('Image upload failed:', err);
//     }
//   };

//   return (
//     <div>
//       <JoditEditor
//         ref={editorRef}
//         value={value}
//         config={config}
//         tabIndex={1}
//         onBlur={(newContent) => onChange(newContent)}
//       />
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         hidden
//         onChange={handleImageUpload}
//       />
//     </div>
//   );
// };

// export default JoditEditorComponent;

import React, { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";

interface Props {
  value: string;
  onChange: (newContent: string) => void;
}

const CLOUDINARY_UPLOAD_PRESET = "sosioloji";
const CLOUDINARY_CLOUD_NAME = "dunid4t4g";

const JoditEditorComponent: React.FC<Props> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  const config = {
    height: 600,
    readonly: false,
    iframe: false,
    toolbarSticky: false,
    buttons: [
      "source", "fullsize", "|",
      "paragraph", "fontsize", "font", "|",
      "bold", "italic", "underline", "strikethrough", "|",
      "ul", "ol", "|",
      "outdent", "indent", "|",
      "align", "hr", "|",
      "link", "image", "video", "|",
      "brush", "cut", "copy", "paste", "|",
      "undo", "redo", "|",
      "removeformat", "selectall", "|",
      {
        name: "uploadImageCustom",
        iconURL: "https://img.icons8.com/ios/24/upload.png",
        exec: () => {
          setTimeout(() => {
            editorRef.current?.editor?.focus(); // Ensure focus
            inputRef.current?.click();
          }, 100);
        },
        tooltip: "Upload Image",
      },
    ],
  };

  useEffect(() => {
    const editorContainer = document.querySelector(".jodit-wysiwyg");
    if (editorContainer) {
      const style = document.createElement("style");
      style.innerHTML = `
        h1 { font-size: 2rem; font-weight: bold; margin: 1rem 0; color: #111; }
        h2 { font-size: 1.5rem; font-weight: bold; margin: 0.75rem 0; color: #222; }
        h3 { font-size: 1.25rem; font-weight: bold; margin: 0.5rem 0; color: #333; }
        h4, h5, h6 { font-weight: bold; color: #444; }
      `;
      editorContainer.appendChild(style);
    }
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const url = data.secure_url;
      const imgHTML = `<img src="${url}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`;

      const editorInstance = editorRef.current?.editor;

      if (editorInstance) {
        editorInstance.focus(); // Make sure it's focused
        editorInstance.selection.insertHTML(imgHTML); // ✅ Insert at cursor
        onChange(editorInstance.value); // Sync state
      } else {
        onChange(value + imgHTML); // Fallback
      }
    } catch (err) {
      console.error("Image upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-white/80 text-center text-sm py-2 text-gray-700">
          Uploading image...
        </div>
      )}
      <JoditEditor
        ref={editorRef}
        value={value}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => onChange(newContent)}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default JoditEditorComponent;
