// // import { EditorContent, useEditor } from "@tiptap/react";
// // import StarterKit from "@tiptap/starter-kit";
// // import Image from "@tiptap/extension-image";
// // import Underline from "@tiptap/extension-underline";
// // import Link from "@tiptap/extension-link";
// // import  { useEffect } from "react";
// // import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";
// // import { MdOutlineImage } from "react-icons/md";

// // interface Props {
// //   content: string;
// //   onChange: (value: string) => void;
// // }

// // const TiptapEditor = ({ content, onChange }: Props) => {
// //   const editor = useEditor({
// //     extensions: [
// //       StarterKit,
// //       Underline,
// //       Link,
// //       Image.configure({
// //         inline: false,
// //         HTMLAttributes: {
// //           class: "rounded-md my-3",
// //         },
// //       }),
// //     ],
// //     content,
// //     editorProps: {
// //       attributes: {
// //         class:
// //           "prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[300px] p-4 border border-gray-300 rounded-md",
// //       },
// //     },
// //     onUpdate({ editor }) {
// //       onChange(editor.getHTML());
// //     },
// //   });

// //   useEffect(() => {
// //     if (editor && content !== editor.getHTML()) {
// //       editor.commands.setContent(content);
// //     }
// //   }, [content]);

// //   const handleImageUpload = async () => {
// //     const fileInput = document.createElement("input");
// //     fileInput.type = "file";
// //     fileInput.accept = "image/*";
// //     fileInput.click();

// //     fileInput.onchange = async () => {
// //       if (fileInput.files && fileInput.files[0]) {
// //         const file = fileInput.files[0];
// //         const formData = new FormData();
// //         formData.append("file", file);
// //         formData.append("upload_preset", "sosioloji"); // replace with yours

// //         const res = await fetch("https://api.cloudinary.com/v1_1/dunid4t4g/image/upload", {
// //           method: "POST",
// //           body: formData,
// //         });
// //         const data = await res.json();
// //         editor?.commands.setImage({ src: data.secure_url });
// //       }
// //     };
// //   };

// //   return (
// //     <div className="space-y-2">
// //       {/* Toolbar */}
// //       {editor && (
// //         <div className="flex flex-wrap gap-2 border rounded-md px-3 py-2 mb-2">
// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().toggleBold().run()}
// //             className={`p-1 ${editor.isActive("bold") ? "bg-black text-white" : "text-gray-700"}`}
// //           >
// //             <AiOutlineBold />
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().toggleItalic().run()}
// //             className={`p-1 ${editor.isActive("italic") ? "bg-black text-white" : "text-gray-700"}`}
// //           >
// //             <AiOutlineItalic />
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().toggleUnderline().run()}
// //             className={`p-1 ${editor.isActive("underline") ? "bg-black text-white" : "text-gray-700"}`}
// //           >
// //             <AiOutlineUnderline />
// //           </button>

// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().setParagraph().run()}
// //             className={`text-sm px-2 ${editor.isActive("paragraph") ? "bg-black text-white" : "text-gray-700"}`}
// //           >
// //             P
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
// //             className={`text-sm px-2 ${editor.isActive("heading", { level: 2 }) ? "bg-black text-white" : "text-gray-700"}`}
// //           >
// //             H2
// //           </button>

// //           <button
// //             type="button"
// //             onClick={handleImageUpload}
// //             className="p-1 text-gray-700"
// //           >
// //             <MdOutlineImage />
// //           </button>

// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().undo().run()}
// //             className="p-1 text-gray-700"
// //           >
// //             <AiOutlineUndo />
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => editor.chain().focus().redo().run()}
// //             className="p-1 text-gray-700"
// //           >
// //             <AiOutlineRedo />
// //           </button>
// //         </div>
// //       )}

// //       {/* Editor */}
// //       <EditorContent editor={editor} />
// //     </div>
// //   );
// // };

// // export default TiptapEditor;

// import { useEffect } from "react";
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Image from "@tiptap/extension-image";
// import Underline from "@tiptap/extension-underline";
// import Link from "@tiptap/extension-link";
// import TextAlign from "@tiptap/extension-text-align";
// import HorizontalRule from "@tiptap/extension-horizontal-rule";

// import {
//   AiOutlineBold,
//   AiOutlineItalic,
//   AiOutlineUnderline,
//   AiOutlineUndo,
//   AiOutlineRedo,
// } from "react-icons/ai";
// import {
//   MdFormatListBulleted,
//   MdFormatListNumbered,
//   MdOutlineImage,
//   MdOutlineFormatQuote,
//   MdOutlineHorizontalRule,
//   MdCode,
// } from "react-icons/md";

// interface Props {
//   content: string;
//   onChange: (value: string) => void;
// }

// const TiptapEditor = ({ content, onChange }: Props) => {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Image.configure({
//         inline: false,
//         HTMLAttributes: {
//           class: "rounded-md my-3",
//         },
//       }),
//       Link.configure({ openOnClick: false }),
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       HorizontalRule,
//     ],
//     content,
//     editorProps: {
//       attributes: {
//         class:
//           "prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[300px] p-4 border border-gray-300 rounded-md",
//       },
//     },
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   useEffect(() => {
//     if (editor && content !== editor.getHTML()) {
//       editor.commands.setContent(content);
//     }
//   }, [content]);

//   const handleImageUpload = async () => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.click();

//     input.onchange = async () => {
//       const file = input.files?.[0];
//       if (!file) return;

//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "sosioloji"); // ✅ your preset

//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dunid4t4g/image/upload",
//         { method: "POST", body: formData }
//       );
//       const data = await res.json();
//       editor?.chain().focus().setImage({ src: data.secure_url }).run();
//     };
//   };

//   return (
//     <div className="s">
//       {editor && (
//         <div className="flex flex-wrap gap-2  bg-white px-3 py-2 mb-2">
//           {/* Bold, Italic, Underline */}
//           <button
//             type="button"
//             onClick={() => editor.chain().focus().toggleBold().run()}
//             className={`p-1 ${
//               editor.isActive("bold") ? "bg-black text-white" : "text-gray-700"
//             }`}
//           >
//             <AiOutlineBold />
//           </button>
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().toggleItalic().run()}
//             className={`p-1 ${
//               editor.isActive("italic")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             <AiOutlineItalic />
//           </button>
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().toggleUnderline().run()}
//             className={`p-1 ${
//               editor.isActive("underline")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             <AiOutlineUnderline />
//           </button>

//           {/* Paragraph & Headings */}
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().setParagraph().run()}
//             className={`text-sm px-2 ${
//               editor.isActive("paragraph")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             P
//           </button>
//           <button
//           type="button"
//             onClick={() =>
//               editor.chain().focus().toggleHeading({ level: 1 }).run()
//             }
//             className={`text-sm px-2 ${
//               editor.isActive("heading", { level: 1 })
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             H1
//           </button>
//           <button
//           type="button"
//             onClick={() =>
//               editor.chain().focus().toggleHeading({ level: 2 }).run()
//             }
//             className={`text-sm px-2 ${
//               editor.isActive("heading", { level: 2 })
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             H2
//           </button>
//           <button
//           type="button"
//             onClick={() =>
//               editor.chain().focus().toggleHeading({ level: 3 }).run()
//             }
//             className={`text-sm px-2 ${
//               editor.isActive("heading", { level: 3 })
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             H3
//           </button>

//           {/* Lists, Quote, Code */}
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().toggleBulletList().run()}
//             className={`p-1 ${
//               editor.isActive("bulletList")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             <MdFormatListBulleted />
//           </button>
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().toggleOrderedList().run()}
//             className={`p-1 ${
//               editor.isActive("orderedList")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             <MdFormatListNumbered />
//           </button>
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().toggleBlockquote().run()}
//             className={`p-1 ${
//               editor.isActive("blockquote")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             <MdOutlineFormatQuote />
//           </button>
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//             className={`p-1 ${
//               editor.isActive("codeBlock")
//                 ? "bg-black text-white"
//                 : "text-gray-700"
//             }`}
//           >
//             <MdCode />
//           </button>

//           {/* Horizontal Rule */}
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().setHorizontalRule().run()}
//             className="p-1 text-gray-700"
//           >
//             <MdOutlineHorizontalRule />
//           </button>

//           {/* Image Upload */}
//           <button type="button" onClick={handleImageUpload} className="p-1 text-gray-700">
//             <MdOutlineImage />
//           </button>

//           {/* Undo/Redo */}
//           <button
//           type="button"
//             onClick={() => editor.chain().focus().undo().run()}
//             className="p-1 text-gray-700"
//           >
//             <AiOutlineUndo />
//           </button>
//           <button
//             onClick={() => editor.chain().focus().redo().run()}
//             className="p-1 text-gray-700"
//           >
//             <AiOutlineRedo />
//           </button>
//         </div>
//       )}
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

// export default TiptapEditor;



import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";
import { MdOutlineImage } from "react-icons/md";
import { LuList, LuListOrdered } from "react-icons/lu";
import { useEffect } from "react";

interface Props {
  content: string;
  onChange: (value: string) => void;
}

const TiptapEditor = ({ content, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Underline,
      Link,
      Image.configure({
        inline: false,
        HTMLAttributes: {
          class: "rounded-md my-3",
        },
      }),
    ],
    content,
    editorProps: {
  attributes: {
    class:
      "prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[300px] p-4 border border-gray-300 rounded-md",
  },
},
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content]);

  const handleImageUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.onchange = async () => {
      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "sosioloji"); // ✅ your upload preset

        const res = await fetch("https://api.cloudinary.com/v1_1/dunid4t4g/image/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        editor?.commands.setImage({ src: data.secure_url });
      }
    };
  };

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      {editor && (
        <div className="flex flex-wrap gap-2 border rounded-md px-3 py-2 mb-2 bg-gray-50">
          {/* Text Formatting */}
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-1 ${editor.isActive("bold") ? "bg-black text-white" : "text-gray-700"}`}><AiOutlineBold /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-1 ${editor.isActive("italic") ? "bg-black text-white" : "text-gray-700"}`}><AiOutlineItalic /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`p-1 ${editor.isActive("underline") ? "bg-black text-white" : "text-gray-700"}`}><AiOutlineUnderline /></button>

          {/* Paragraph and Headings */}
          <button type="button" onClick={() => editor.chain().focus().setParagraph().run()} className={`text-sm px-2 ${editor.isActive("paragraph") ? "bg-black text-white" : "text-gray-700"}`}>P</button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`text-sm px-2 ${editor.isActive("heading", { level: 1 }) ? "bg-black text-white" : "text-gray-700"}`}>H1</button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`text-sm px-2 ${editor.isActive("heading", { level: 2 }) ? "bg-black text-white" : "text-gray-700"}`}>H2</button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`text-sm px-2 ${editor.isActive("heading", { level: 3 }) ? "bg-black text-white" : "text-gray-700"}`}>H3</button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={`text-sm px-2 ${editor.isActive("heading", { level: 4 }) ? "bg-black text-white" : "text-gray-700"}`}>H4</button>

          {/* Lists */}
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-1 ${editor.isActive("bulletList") ? "bg-black text-white" : "text-gray-700"}`}><LuList /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`p-1 ${editor.isActive("orderedList") ? "bg-black text-white" : "text-gray-700"}`}><LuListOrdered /></button>

          {/* Image Upload */}
          <button type="button" onClick={handleImageUpload} className="p-1 text-gray-700"><MdOutlineImage /></button>

          {/* Undo / Redo */}
          <button type="button" onClick={() => editor.chain().focus().undo().run()} className="p-1 text-gray-700"><AiOutlineUndo /></button>
          <button type="button" onClick={() => editor.chain().focus().redo().run()} className="p-1 text-gray-700"><AiOutlineRedo /></button>
        </div>
      )}

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
