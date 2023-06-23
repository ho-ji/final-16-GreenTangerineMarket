import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './ProductCreateComponent.module.scss'

import { uploadImages } from 'api/image'
import { postProductAPI } from 'api/product'
import { SmallButton } from 'components/Common/Button/Small/SmallButton'
import formatNumberWithComma from 'utils/formatNumberWithComma'

const ProductCreateComponent = () => {
  const [name, setname] = useState('')
  const [prices, setPrices] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [selectedImages, setSelectedImages] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const navigate = useNavigate()

  const link = '/'

  const handleSend = async () => {
    if (imageUrl === '') {
      window.alert('상품이미지를 등록해주세요!')
      return
    }
    if (name === '') {
      window.alert('상품명을 등록해주세요!')
      return
    }
    if (prices === '' || parseInt(prices) <= 0) {
      window.alert('상품가격을 등록해주세요!')
    }
    const res = await postProductAPI({ link: link, itemName: name, price: parseInt(prices), itemImage: imageUrl })
    navigate(-1)
  }

  const handleInputChange = event => {
    const inputText = event.target.value
    if (inputText.length <= 30) {
      setname(inputText)
    }
  }

  const handlePriceChange = event => {
    const inputPrice = event.target.value
    if (inputPrice.length <= 20) {
      setPrices(inputPrice)
    }
  }

  const handleProductUpload = async event => {
    const files = event.target.files
    const fileArray = Array.from(files)

    setSelectedImages(fileArray)

    const imagePreviewsArray = await Promise.all(
      fileArray.map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
          reader.readAsDataURL(file)
        })
      }),
    )

    setImagePreviews(imagePreviewsArray)

    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i])
    }
    const res = await uploadImages(formData)
    setImageUrl(`https://api.mandarin.weniv.co.kr/${res.data[0].filename}`)
    setSelectedImage(files)
  }

  return (
    <>
      <section className={s.section}>
        <form className={s.contentBox}>
          <h2 className={s.title}>상품 등록페이지</h2>
          <p className={s.subtitle}>-여러분의 상품을 보여주세요!-</p>
          <section className={s.imageContainer}>
            <h2>Step1. 상품 이미지 등록</h2>
            <label htmlFor='productImg' className='a11y-hidden'>
              상품 이미지 업로드
            </label>
            <input
              id='productImg'
              type='file'
              accept='image/*'
              onChange={handleProductUpload}
              className={s.imageInput}
            />
            <div className={s.imagePreviewContainer}>
              {imagePreviews.map((preview, index) => (
                <img key={index} src={preview} alt={`${index + 1}번째 이미지 미리보기`} className={s.imagePreview} />
              ))}
            </div>
          </section>

          <section className={s.nameContainer}>
            <h2>Step2. 상품명 등록</h2>
            <label htmlFor='productName' className='a11y-hidden'>
              상품명 입력
            </label>
            <input
              id='productName'
              type='text'
              className={s.name}
              placeholder='상품명을 적어주세요.'
              value={name}
              onChange={handleInputChange}
              maxLength={30}
            />
            <div className={s.counter}>{name.length}/30</div>
          </section>

          <section className={s.priceContainer}>
            <h2>Step3. 상품 가격 등록</h2>
            <label htmlFor='productPrice' className='a11y-hidden'>
              가격
            </label>
            <input
              id='productPrice'
              type='text'
              className={s.price}
              onChange={handlePriceChange}
              value={formatNumberWithComma(prices)}
              placeholder='1원이상 기입해주세요.'
            />
          </section>

          <SmallButton onClickEvent={handleSend}>등록</SmallButton>
        </form>
      </section>
    </>
  )
}

export default ProductCreateComponent