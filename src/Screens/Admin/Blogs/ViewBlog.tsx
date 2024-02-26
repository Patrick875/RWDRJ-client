import { useParams } from "react-router-dom";
import useFetchData from "../../../Hooks/UseFetchData";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import { useEffect, useMemo, useRef, useState } from "react";
import instance from "../../../API";
import { BlogPost } from "../../../Shared/types";
import toast from "react-hot-toast";

const modules = {
	toolbar: {
		container: [
			[{ size: ["small", false, "large", "huge"] }],
			["bold", "italic", "underline", "strike"],
			["blockquote", "code-block"],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }],
			[{ indent: "-1" }, { indent: "+1" }],
			[{ direction: "rtl" }],
			[{ align: [] }],
			["link"],
			["clean"],
		],
	},
};

function ViewBlog() {
	const { refId } = useParams();
	const quillRef = useRef<ReactQuill>(null);
	const { data: blog, loading } = useFetchData<BlogPost>(`/blogs/${refId}`);
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [coverImage, setCoverImage] = useState<string>("");
	const [localCoverImage, setLocalCoverImage] = useState<string>("");

	const lengthChanged = useMemo(() => {
		if (blog) {
			const currentEditor = quillRef.current?.getEditor();
			const unprevEditor = currentEditor
				? quillRef.current?.makeUnprivilegedEditor(currentEditor)
				: null;

			if (unprevEditor) {
				if (
					blog.content.length < unprevEditor?.getHTML().length ||
					title.length !== blog.title.length ||
					localCoverImage !== blog.coverImage
				) {
					return true;
				}
			} else {
				return false;
			}
		}
	}, [content, title, localCoverImage]);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (value: string) => {
		setContent(value);
	};
	const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setCoverImage(reader.result as string);
				setLocalCoverImage(URL.createObjectURL(file));
			};
			reader.readAsDataURL(file);
		}
	};

	const loggedIn: boolean = true;
	const updateBlog = async () => {
		const blogPost: BlogPost = {
			content,
			title,
			coverImage,
		};
		await instance
			.patch(`/blogs/${refId}`, blogPost)
			.then(() => {
				toast.success("Blog updated !!!");
			})
			.catch((err) => {
				toast.error(err.code);
			});
	};

	useEffect(() => {
		if (blog) {
			setContent(blog.content);
			setTitle(blog.title);
			setCoverImage(blog.coverImage);
			setLocalCoverImage(blog.coverImage);
		}
	}, [blog]);

	return (
		<div>
			{loading && <p>Loading ...</p>}
			{!loading && blog && (
				<div>
					<div
						className="w-full h-48 bg-center bg-cover rounded-[8px]"
						style={{ backgroundImage: `url(${localCoverImage})` }}>
						<div className="bg-[rgb(0,0,0,0.6)] h-48 flex justify-center items-center">
							<div>
								<input
									onChange={handleTitleChange}
									className="w-full p-2 text-center text-white bg-transparent font-hanuman focus:border-blue-500 "
									defaultValue={blog.title}
									value={title}
								/>
								<div>
									<input
										type="file"
										accept="image/*"
										onChange={handleCoverImageChange}
										className="hidden mb-4"
										id="coverImageInput"
									/>
									<label
										htmlFor="coverImageInput"
										className="block  p-2 mb-4 rounded-[4px] text-xs text-center text-white cursor-pointer bg-sky-900">
										Update Cover Image
									</label>
								</div>
							</div>
						</div>
					</div>
					{!loggedIn && parse(blog.content)}
					{loggedIn && (
						<div>
							<ReactQuill
								ref={quillRef}
								theme="snow"
								value={content}
								defaultValue={blog.content}
								onChange={handleContentChange}
								placeholder="Write your blog post content here..."
								className="mb-4"
								modules={modules}
							/>
							{lengthChanged && (
								<button
									onClick={updateBlog}
									className="text-white bg-emerald-950 font-bold p-1 rounded-[6px]">
									Save
								</button>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default ViewBlog;
