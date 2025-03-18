"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import {AArrowDown, AArrowUp, Bold, LinkIcon, Italic, UnderlineIcon, List, ListOrdered} from "lucide-react";
import FontSize from "@tiptap/extension-font-size";
import Link from "@tiptap/extension-link";
import {Button} from "@/components/ui/button";

const TiptapEditor = ({ onChange }: { onChange: (content: string) => void }) => {
  const [content, setContent] = useState("");

  const CustomListItem = ListItem.extend({
    content: "inline*", // ✅ Prevents automatic <p> inside <li>
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false, // Disable default list to avoid conflicts
        orderedList: false, // Disable default list to avoid conflicts
        listItem: false, // Disable default ListItem to prevent wrapping <p>
      }),
      BulletList,
      OrderedList,
      CustomListItem,
      TextStyle,
      Color.configure({ types: ["textStyle"] }),
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
      FontSize.configure({ types: ["textStyle"] }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: {
          class: "text-blue-500 underline", // Optional: Add Tailwind styles
        },
      }),
    ],
    content: ``, // Ensure correct list structure
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      onChange(html);
    },
  });


  if (!editor) return null;

  const actionEditor = [
    {
      value: "bold",
      icon: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      value: "underline",
      icon: UnderlineIcon,
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive("underline"),
    },
    {
      value: "italic",
      icon: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      value: "increase",
      icon: AArrowUp, // Use a bigger icon for now
      action: () => {
        const currentSize = parseInt(editor.getAttributes("textStyle")?.fontSize || "16");
        editor.chain().focus().setMark("textStyle", { fontSize: `${currentSize + 2}px` }).run();
      },
      isActive: () => false, // Always clickable
    },
    {
      value: "decrease",
      icon: AArrowDown, // Use a smaller icon for now
      action: () => {
        const currentSize = parseInt(editor.getAttributes("textStyle")?.fontSize || "16");
        if (currentSize > 10) {
          editor.chain().focus().setMark("textStyle", { fontSize: `${currentSize - 2}px` }).run();
        }
      },
      isActive: () => false, // Always clickable
    },
    {
      value: "bulletList",
      icon: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      value: "orderedList",
      icon: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      value: "link",
      icon: LinkIcon, // Replace with your actual icon
      action: () => {
        if (editor.isActive("link")) {
          editor.chain().focus().unsetLink().run(); // Removes the link
        } else {
          const url = prompt("Enter URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }
      },
      isActive: () => editor.isActive("link"),
    }
  ];


  return (
      <div>
        <div className="flex gap-2 mb-4">
          <ToggleGroup type="multiple" size="sm" className="space-x-2">
            {actionEditor.map((item, index) => (
                <ToggleGroupItem
                    value={item.value}
                    key={index}
                    //@ts-ignore
                    pressed={item.isActive()} // Ensure function call
                    onClick={item.action}
                >
                  <item.icon className="h-4 w-4" />
                </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="prose max-w-none">
          <EditorContent editor={editor}/>
        </div>
      </div>
  );
};

export default TiptapEditor;
