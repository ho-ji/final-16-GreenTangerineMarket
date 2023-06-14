import { LargeButton, LargeButtonDisabled } from 'components/Common/Button/Large/LargeButton'
import s from './NotFoundPage.module.scss'
import notFoundImg from 'assets/img/icon-404.png'
import { useNavigate } from 'react-router-dom/dist'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const mainHomeClick = () => {
    navigate('/')
  }
  const backPageClick = () => {
    navigate(-1)
  }
  return (
    <div className={s.NotFoundWrapper}>
      <section>
        <img className={s.notFoundImg} src={notFoundImg} alt='페이지를 찾을 수 없습니다' />
      </section>
      <section className={s.notFoundText}>
        <h1 className={s.notFoundHeader}>페이지를 찾을 수 없습니다</h1>
        <p className={s.notFoundCheck}>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
          <br />
          웹주소가 올바른지 확인하세요
        </p>
        <LargeButton className={s.mainHomeClick} onClickEvent={mainHomeClick}>
          메인으로
        </LargeButton>
        <LargeButtonDisabled onClickEvent={backPageClick}>이전페이지</LargeButtonDisabled>
      </section>
    </div>
  )
}

export default NotFoundPage
