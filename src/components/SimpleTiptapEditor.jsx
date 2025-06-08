import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './SimpleTiptapEditor.css';

const sampleHtml = `
  <h2>Sample HTML Content</h2>
  <p>This is a sample paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
  <p>You can edit this content.</p>
`;

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        Strike
      </button>
      <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
        Paragraph
      </button>
       <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        H2
      </button>
    </div>
  );
};

const SimpleTiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! ✍️</p>',
    editable: true,
  });

  const loadSample = () => {
    if (editor) {
      editor.commands.setContent(sampleHtml);
    }
  };

  return (
    <div className="tiptap-editor-container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={loadSample} className="tiptap-load-button">
        Load Sample HTML
      </button>
    </div>
  );
};

export default SimpleTiptapEditor;
