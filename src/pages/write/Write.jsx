import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Context'
import './write.css'
export default function Write() {
	const [title, setTitle] = useState('')
	const [categories, setCategories] = useState([])
	const [desc, setDesc] = useState('')
	const [file, setFile] = useState(null)
	const { user } = useContext(Context)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const newPost = {
			username: user.username,
			title,
			categories,
			desc,
		}
		if (file) {
			const data = new FormData()
			const filename = Date.now() + file.name
			data.append('name', filename)
			data.append('file', file)
			newPost.photo = filename
			try {
				await axios.post('/upload', data)
			} catch (err) {}
		}
		try {
			const res = await axios.post('/posts', newPost)
			window.location.replace('/post/' + res.data._id)
		} catch (err) {}
	}

	const [cats, setCats] = useState([])
	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/categories')

			setCats(res.data)
		}
		getCats()
	}, [])

	const handleChangeCategory = (e) => {
		setCategories((prev) => {
			const selectedCate = e.target.value
			if (!prev.includes(selectedCate) && selectedCate !== '')
				return [...prev, e.target.value]
			return prev
		})
	}

	const delSelectedCate = (e) => {
		setCategories((prev) => {
			const delCate = e.target.value
			const arrTemp = prev.filter(function (item) {
				return item !== delCate
			})
			return arrTemp
		})
	}

	return (
		<div className='write'>
			{file && (
				<img className='writeImg' src={URL.createObjectURL(file)} alt='' />
			)}
			<form className='writeForm' onSubmit={handleSubmit}>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i className='writeIcon fa-solid fa-file-image'></i>
					</label>
					<input
						type='file'
						id='fileInput'
						style={{ display: 'none' }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type='text'
						placeholder='Tiêu đề'
						className='writeInput'
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='writeFormGroup'>
					<select className='sidebarList' onChange={handleChangeCategory}>
						<option value=''>-- Select --</option>
						{cats.map((c, index) => (
							<option key={index} value={c.name}>
								{c.name}
							</option>
						))}
					</select>
					{/* <input
						style={{ fontSize: '18px', marginLeft: '35px' }}
						type='text'
						placeholder='Chủ đề'
						className='writeInput'
						onChange={(e) => setCate(e.target.value)}
					/> */}
				</div>
				<div>
					{categories.map((c, index) => (
						<span key={index}>
							{c}
							<button value={c} onClick={delSelectedCate}>
								X
							</button>
						</span>
					))}
				</div>

				<div className='writeFormGroup'>
					<textarea
						placeholder='Mô tả ...'
						className='writeInput writeText'
						type='text'
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className='writeSubmit' type='submit'>
					Publish
				</button>
			</form>
		</div>
	)
}
