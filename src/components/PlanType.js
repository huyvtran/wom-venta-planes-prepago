import React,{useContext} from 'react'
import styled from 'styled-components'
import { FormContext } from '../context/FormContext'

const PlanBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align: center;
  border: 1px solid #B3A6BA;
  padding:20px;
  border-radius:8px;
  position:relative;
  width:48%;
  max-width:280px;
  transition:border-color 0.3s ease;
  height:140px;
  cursor:pointer;
  &.disabled{
    pointer-events:none;
    filter:grayscale(100%);
    opacity:0.4;
    user-select:none;
  }
  @media(max-width: 480px){
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    height: auto;
    min-height: 100px;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    padding: 20px 20px 20px 40px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  &.active{
    border-color:#E92070;
    svg{
      path{
        fill: #381451;
      }
      &.svg-str{
        path{
          fill: #381451;
          stroke: #381451;
        }
      }
    }
    h2{
      color: #381451;
    }
    p{
      color: #7C6C8A;
      b{
        color: #574466;
      }
    }
  }
  svg{
    path{
      fill: #7C6C8A;
    }
    &.svg-str{
      path{
        fill: #7C6C8A;
        stroke: #7C6C8A;
      }
    }
  }
  h2{
    color: #7C6C8A;
    font-size:16px;
    margin: 6px;
    font-weight:700;
  }
  p{
    text-align:center;
    color: #B3A6BA;
    font-size:12px;
    font-weight:300;
    margin:5px;
    @media(max-width: 480px){
      text-align: left;
    }
  }
  span{
    width:20px;
    height:20px;
    border-radius:50%;
    background:#B3A6BA;
    position:absolute;
    top:10px;
    left:10px;
    transition:background 0.3s ease;
    @media(max-width: 480px){
      top: 0;
      bottom: 0;
      left: 10px;
      right: auto;
      margin: auto;
    }
    &.active{
      background:#E92070;
      &:after{
        transform:scale(0.35);
      }
    }
    &:after{
      content:'';
      background:white;
      width:18px;
      position:absolute;
      border-radius:50%;
      height:18px;
      left:50%;
      margin-left:-9px;
      top:50%;
      margin-top:-9px;
      transition:transform 0.5s ease;
    }
  }
`

const PlanType = ({ title, subtitle, subtitle2, type, dataName, selected, disabled = false }) => {
  const { formData,setFormData } = useContext(FormContext)

  const clickHandler = (key,ptype)=>{
    setFormData({...formData,[key]:ptype})
  }

  return (
    <PlanBox className={selected ? `active ${disabled ? `disabled`:``}`: `${disabled ? `disabled`:``}`} onClick={()=>clickHandler(dataName,type)}>
      {type === 'portabilidad' && <svg className="svg-str" width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.2743 2.66675H18.7164C18.08 2.66675 17.4697 2.90087 17.0197 3.31762C16.5697 3.73437 16.3169 4.2996 16.3169 4.88897V12.4445C16.3169 12.5624 16.3675 12.6754 16.4575 12.7588C16.5475 12.8421 16.6695 12.889 16.7968 12.889C16.9241 12.889 17.0461 12.8421 17.1361 12.7588C17.2261 12.6754 17.2767 12.5624 17.2767 12.4445V4.88897C17.2767 4.53535 17.4284 4.19621 17.6984 3.94616C17.9684 3.69611 18.3346 3.55564 18.7164 3.55564H20.1561V4.00008C20.1561 4.11796 20.2067 4.231 20.2967 4.31435C20.3867 4.3977 20.5088 4.44453 20.636 4.44453H27.3547C27.482 4.44453 27.6041 4.3977 27.6941 4.31435C27.7841 4.231 27.8346 4.11796 27.8346 4.00008V3.55564H29.2743C29.6562 3.55564 30.0224 3.69611 30.2924 3.94616C30.5624 4.19621 30.7141 4.53535 30.7141 4.88897V27.1112C30.7141 27.4648 30.5624 27.804 30.2924 28.054C30.0224 28.3041 29.6562 28.4445 29.2743 28.4445H18.7164C18.3346 28.4445 17.9684 28.3041 17.6984 28.054C17.4284 27.804 17.2767 27.4648 17.2767 27.1112V19.5556C17.2767 19.4378 17.2261 19.3247 17.1361 19.2414C17.0461 19.158 16.9241 19.1112 16.7968 19.1112C16.6695 19.1112 16.5475 19.158 16.4575 19.2414C16.3675 19.3247 16.3169 19.4378 16.3169 19.5556V27.1112C16.3169 27.7006 16.5697 28.2658 17.0197 28.6825C17.4697 29.0993 18.08 29.3334 18.7164 29.3334H29.2743C29.9107 29.3334 30.5211 29.0993 30.9711 28.6825C31.4211 28.2658 31.6739 27.7006 31.6739 27.1112V4.88897C31.6739 4.2996 31.4211 3.73437 30.9711 3.31762C30.5211 2.90087 29.9107 2.66675 29.2743 2.66675Z" strokeWidth="0.7375"/>
      <path d="M15.8368 28.4445H5.27892C4.89709 28.4445 4.53089 28.3041 4.26089 28.054C3.99089 27.804 3.83921 27.4648 3.83921 27.1112V24.889H14.877C15.0043 24.889 15.1264 24.8421 15.2164 24.7588C15.3064 24.6754 15.3569 24.5624 15.3569 24.4445C15.3569 24.3267 15.3064 24.2136 15.2164 24.1303C15.1264 24.0469 15.0043 24.0001 14.877 24.0001H3.83921V4.88897C3.83921 4.53535 3.99089 4.19621 4.26089 3.94616C4.53089 3.69611 4.89709 3.55564 5.27892 3.55564H15.8368C15.9641 3.55564 16.0862 3.50881 16.1762 3.42546C16.2662 3.34211 16.3167 3.22907 16.3167 3.11119C16.3167 2.99332 16.2662 2.88027 16.1762 2.79692C16.0862 2.71357 15.9641 2.66675 15.8368 2.66675H5.27892C4.64253 2.66675 4.0322 2.90087 3.5822 3.31762C3.1322 3.73437 2.87939 4.2996 2.87939 4.88897V27.1112C2.87939 27.7006 3.1322 28.2658 3.5822 28.6825C4.0322 29.0993 4.64253 29.3334 5.27892 29.3334H15.8368C15.9641 29.3334 16.0862 29.2866 16.1762 29.2032C16.2662 29.1199 16.3167 29.0068 16.3167 28.889C16.3167 28.7711 16.2662 28.6581 16.1762 28.5747C16.0862 28.4914 15.9641 28.4445 15.8368 28.4445Z" strokeWidth="0.7375"/>
      <path d="M10.0781 26.6667C10.0781 26.8425 10.1344 27.0144 10.2399 27.1606C10.3453 27.3067 10.4952 27.4207 10.6706 27.4879C10.846 27.5552 11.039 27.5728 11.2252 27.5385C11.4114 27.5042 11.5824 27.4196 11.7166 27.2953C11.8509 27.1709 11.9423 27.0126 11.9793 26.8401C12.0163 26.6677 11.9973 26.489 11.9247 26.3266C11.852 26.1641 11.729 26.0253 11.5712 25.9276C11.4133 25.83 11.2278 25.7778 11.0379 25.7778C10.7834 25.7778 10.5392 25.8715 10.3592 26.0382C10.1792 26.2049 10.0781 26.431 10.0781 26.6667Z" strokeWidth="0.7375"/>
      <path d="M22.0757 27.1112C22.0757 27.2291 22.1262 27.3421 22.2162 27.4255C22.3062 27.5088 22.4283 27.5556 22.5556 27.5556H25.435C25.5623 27.5556 25.6844 27.5088 25.7744 27.4255C25.8644 27.3421 25.9149 27.2291 25.9149 27.1112C25.9149 26.9933 25.8644 26.8803 25.7744 26.7969C25.6844 26.7136 25.5623 26.6667 25.435 26.6667H22.5556C22.4283 26.6667 22.3062 26.7136 22.2162 26.7969C22.1262 26.8803 22.0757 26.9933 22.0757 27.1112Z" strokeWidth="0.7375"/>
      <path d="M12.4774 4.88902C12.4774 4.77115 12.4269 4.6581 12.3369 4.57475C12.2469 4.49141 12.1248 4.44458 11.9975 4.44458H9.11809C8.99081 4.44458 8.86874 4.49141 8.77874 4.57475C8.68875 4.6581 8.63818 4.77115 8.63818 4.88902C8.63818 5.0069 8.68875 5.11994 8.77874 5.20329C8.86874 5.28664 8.99081 5.33347 9.11809 5.33347H11.9975C12.1248 5.33347 12.2469 5.28664 12.3369 5.20329C12.4269 5.11994 12.4774 5.0069 12.4774 4.88902Z" strokeWidth="0.7375"/>
      <path d="M21.231 16.4445H12.3623V15.5557H21.231L19.9736 14.3912C19.9289 14.3498 19.8934 14.3006 19.8691 14.2464C19.8449 14.1923 19.8325 14.1343 19.8325 14.0757C19.8325 14.0171 19.8449 13.959 19.8691 13.9049C19.8934 13.8507 19.9289 13.8015 19.9736 13.7601C20.0184 13.7187 20.0715 13.6858 20.1299 13.6634C20.1884 13.6409 20.2511 13.6294 20.3143 13.6294C20.3776 13.6294 20.4403 13.6409 20.4987 13.6634C20.5572 13.6858 20.6103 13.7187 20.6551 13.7601L22.7283 15.689C22.7742 15.7289 22.8108 15.7771 22.8358 15.8306C22.8608 15.8841 22.8737 15.9418 22.8737 16.0001C22.8737 16.0584 22.8608 16.1161 22.8358 16.1696C22.8108 16.2231 22.7742 16.2713 22.7283 16.3112L20.6551 18.2401C20.6093 18.281 20.5551 18.3131 20.4958 18.3345C20.4365 18.3558 20.3732 18.3661 20.3095 18.3645C20.2474 18.3654 20.1858 18.3548 20.1281 18.3334C20.0705 18.3121 20.018 18.2804 19.9736 18.2401C19.8851 18.1555 19.8355 18.0423 19.8355 17.9245C19.8355 17.8067 19.8851 17.6936 19.9736 17.609L21.231 16.4445Z" strokeWidth="0.7375"/>
      </svg>
      }
      {type === 'lineaNueva' && <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.00261 0.533447C6.56922 0.533447 6.15749 0.723554 5.87562 1.05381L0.489944 7.36408C0.259791 7.63374 0.133301 7.97705 0.133301 8.33206V28.0834C0.133301 29.6575 1.40381 30.9334 2.97112 30.9334H17.0761C16.7068 30.3516 16.4187 29.7129 16.2275 29.0334H2.97099C2.44854 29.0334 2.02505 28.6081 2.02505 28.0834V26.7218C2.02505 25.8998 2.6893 25.2334 3.50869 25.2334H4.86181C5.38482 25.2334 5.80881 24.8081 5.80881 24.2834C5.80881 23.7588 5.38482 23.3334 4.86181 23.3334H3.50869C2.6893 23.3334 2.02505 22.6671 2.02505 21.8451V9.03506C2.02505 8.68005 2.15154 8.33674 2.3817 8.06708L6.74576 2.95381C7.02763 2.62355 7.43935 2.43345 7.87275 2.43345H21.8898C22.4122 2.43345 22.8357 2.85875 22.8357 3.38345V19.8879C22.9332 19.8839 23.0312 19.8819 23.1297 19.8819C23.679 19.8819 24.2138 19.9439 24.7277 20.0612V3.38345C24.7277 1.80942 23.4572 0.533447 21.8899 0.533447H7.00261Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20.2314 20.4937V9.45914C20.2314 8.06056 19.1092 6.91839 17.7236 6.91839H9.06914C7.68354 6.91839 6.56132 8.06056 6.56132 9.45914V21.175C6.56132 22.5737 7.68371 23.716 9.06914 23.716H16.7872C17.0056 23.3019 17.2631 22.9118 17.5548 22.5506H15.9594V21.4534C15.9594 21.1341 15.7037 20.8708 15.3823 20.8708C15.0612 20.8708 14.8052 21.134 14.8052 21.4534V22.5506H11.9871V18.7328C11.9871 18.7034 11.9911 18.6749 11.9986 18.6479C12.0013 18.64 12.0039 18.6321 12.0063 18.6242C12.0502 18.504 12.1633 18.4213 12.2916 18.4213H14.5007C14.6289 18.4213 14.742 18.5039 14.786 18.6239C14.7881 18.6307 14.7908 18.6393 14.7941 18.6487C14.8013 18.6752 14.8052 18.7034 14.8052 18.7328V19.8911C14.8052 20.2102 15.0611 20.4737 15.3823 20.4737C15.7038 20.4737 15.9594 20.2101 15.9594 19.8911V19.0367C17.2332 19.0001 18.3821 18.2373 18.9253 17.0693H19.077V21.1401C19.4392 20.8907 19.8254 20.6739 20.2314 20.4937ZM9.06891 8.08344C8.32519 8.08344 7.71529 8.69815 7.71529 9.45898V13.5648H7.86702C8.41014 12.3968 9.55911 11.634 10.8329 11.5974V10.6229C10.8329 10.3039 11.0885 10.0403 11.41 10.0403C11.7312 10.0403 11.9871 10.3038 11.9871 10.6229V11.901C11.9871 11.9312 11.9912 11.9596 11.9985 11.986C12.0015 11.9947 12.0041 12.0027 12.0062 12.0099C12.0503 12.13 12.1632 12.2126 12.2916 12.2126H14.5007C14.6286 12.2126 14.7414 12.1304 14.7857 12.0109C14.7884 12.0019 14.7911 11.9936 14.7937 11.9861C14.8012 11.9592 14.8052 11.9307 14.8052 11.901V8.08344H11.9871V9.06064C11.9871 9.37976 11.7312 9.64325 11.41 9.64325C11.0885 9.64325 10.8329 9.37967 10.8329 9.06064V8.08344H9.06891ZM15.9595 8.08344V11.5974C17.2332 11.6339 18.3822 12.3966 18.9253 13.5648H19.0771V9.45898C19.0771 8.69815 18.4672 8.08344 17.7234 8.08344H15.9595ZM10.9288 12.7612C10.0518 12.7612 9.25159 13.2867 8.89224 14.1031C8.72487 14.4832 8.35033 14.73 7.93651 14.73H7.71529V15.904H7.93651C8.35046 15.904 8.72501 16.1507 8.8924 16.5308C9.25157 17.3471 10.0519 17.8728 10.929 17.8728H11.1064C11.3705 17.5006 11.8026 17.2559 12.2916 17.2559H14.5007C14.9899 17.2559 15.4219 17.5007 15.6861 17.8728H15.8635C16.7405 17.8728 17.5407 17.3472 17.9001 16.5308C18.0674 16.1508 18.442 15.904 18.8558 15.904H19.077V14.73H18.8558C18.4418 14.73 18.0673 14.4832 17.8999 14.1031C17.5407 13.2868 16.7405 12.7612 15.8633 12.7612H15.6859C15.4218 13.1333 14.9897 13.3778 14.5007 13.3778H12.2916C11.8024 13.3778 11.3705 13.1333 11.1063 12.7612H10.9288ZM7.71529 17.0693V21.1749C7.71529 21.9359 8.32536 22.5506 9.06891 22.5506H10.8329V19.0367C9.55904 19.0001 8.4103 18.2373 7.86705 17.0693H7.71529Z"/>
      <path d="M23.0329 23.5529C23.0329 23.2648 22.7762 23.0312 22.4595 23.0312C22.1428 23.0312 21.8861 23.2648 21.8861 23.5529V25.2484H20.166C19.8493 25.2484 19.5926 25.482 19.5926 25.7701C19.5926 26.0582 19.8493 26.2918 20.166 26.2918H21.8861V28.1177C21.8861 28.4059 22.1428 28.6394 22.4595 28.6394C22.7762 28.6394 23.0329 28.4059 23.0329 28.1177V26.2918H24.6097C24.9264 26.2918 25.1831 26.0582 25.1831 25.7701C25.1831 25.482 24.9264 25.2484 24.6097 25.2484H23.0329V23.5529Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M27.3333 25.8353C27.3333 28.5753 25.1191 30.7965 22.3878 30.7965C19.6565 30.7965 17.4424 28.5753 17.4424 25.8353C17.4424 23.0953 19.6565 20.8742 22.3878 20.8742C25.1191 20.8742 27.3333 23.0953 27.3333 25.8353ZM26.4732 25.8353C26.4732 28.0988 24.6441 29.9337 22.3878 29.9337C20.1316 29.9337 18.3025 28.0988 18.3025 25.8353C18.3025 23.5719 20.1316 21.737 22.3878 21.737C24.6441 21.737 26.4732 23.5719 26.4732 25.8353Z"/>
      </svg>
      }
      {type === 'Despacho a domicilio' && <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.0716 15.6146C24.3223 15.6146 23.6104 15.9016 23.0734 16.4207C22.5363 16.9459 22.2366 17.6298 22.2366 18.3626C22.2366 19.0953 22.5301 19.7793 23.0734 20.3044C23.6166 20.8235 24.3223 21.1105 25.0716 21.1105C26.6078 21.1105 27.8566 19.877 27.8566 18.3626C27.8566 16.8481 26.6078 15.6146 25.0716 15.6146ZM25.0716 19.8892C24.2099 19.8892 23.4855 19.193 23.4855 18.3626C23.4855 17.5321 24.2099 16.8359 25.0716 16.8359C25.9209 16.8359 26.6078 17.5199 26.6078 18.3626C26.6078 19.2052 25.9209 19.8892 25.0716 19.8892ZM25.796 6.46105C25.6836 6.35724 25.5337 6.30228 25.3776 6.30228H22.1742C21.8307 6.30228 21.5497 6.57707 21.5497 6.91293V11.9202C21.5497 12.2561 21.8307 12.5309 22.1742 12.5309H27.2572C27.6006 12.5309 27.8816 12.2561 27.8816 11.9202V8.56778C27.8816 8.3968 27.8067 8.23193 27.6756 8.1159L25.796 6.46105ZM26.6327 11.3096H22.7986V7.51747H25.1341L26.6327 8.83647V11.3096ZM9.82258 15.6146C9.07324 15.6146 8.36137 15.9016 7.82434 16.4207C7.28731 16.9459 6.98758 17.6298 6.98758 18.3626C6.98758 19.0953 7.28107 19.7793 7.82434 20.3044C8.36761 20.8235 9.07324 21.1105 9.82258 21.1105C11.3587 21.1105 12.6076 19.877 12.6076 18.3626C12.6076 16.8481 11.3587 15.6146 9.82258 15.6146ZM9.82258 19.8892C8.96084 19.8892 8.23647 19.193 8.23647 18.3626C8.23647 17.5321 8.96084 16.8359 9.82258 16.8359C10.6718 16.8359 11.3587 17.5199 11.3587 18.3626C11.3587 19.2052 10.6718 19.8892 9.82258 19.8892ZM5.6575 16.3657H4.40236V14.7414C4.40236 14.4056 4.12136 14.1308 3.77791 14.1308C3.43447 14.1308 3.15347 14.4056 3.15347 14.7414V16.9764C3.15347 17.3122 3.43447 17.587 3.77791 17.587H5.6575C6.00095 17.587 6.28195 17.3122 6.28195 16.9764C6.28195 16.6405 6.00095 16.3657 5.6575 16.3657ZM8.82346 13.0377C8.82346 12.7019 8.54246 12.4271 8.19901 12.4271H0.624449C0.281002 12.4271 0 12.7019 0 13.0377C0 13.3736 0.281002 13.6484 0.624449 13.6484H8.19901C8.54246 13.6484 8.82346 13.3797 8.82346 13.0377ZM1.89208 10.8333L9.46664 10.876C9.81009 10.876 10.0911 10.6073 10.0973 10.2715C10.1036 9.92952 9.82258 9.65473 9.47913 9.65473L1.90457 9.61199C1.89832 9.61199 1.89832 9.61199 1.89832 9.61199C1.55488 9.61199 1.27387 9.88067 1.27387 10.2165C1.26763 10.5585 1.54863 10.8333 1.89208 10.8333ZM3.16595 8.06094H10.7405C11.084 8.06094 11.365 7.78615 11.365 7.4503C11.365 7.11444 11.084 6.83965 10.7405 6.83965H3.16595C2.82251 6.83965 2.54151 7.11444 2.54151 7.4503C2.54151 7.78615 2.82251 8.06094 3.16595 8.06094ZM30.4356 7.23657L25.9646 3.61544C25.8522 3.52384 25.7148 3.47499 25.5649 3.47499H20.3071V1.27666C20.3071 0.940807 20.0261 0.666016 19.6826 0.666016H3.77791C3.43447 0.666016 3.15347 0.940807 3.15347 1.27666V5.7466C3.15347 6.08245 3.43447 6.35724 3.77791 6.35724C4.12136 6.35724 4.40236 6.08245 4.40236 5.7466V1.88731H19.0644V16.3657H13.9439C13.6005 16.3657 13.3195 16.6405 13.3195 16.9764C13.3195 17.3122 13.6005 17.587 13.9439 17.587H21.5685C21.9119 17.587 22.1929 17.3122 22.1929 16.9764C22.1929 16.6405 21.9119 16.3657 21.5685 16.3657H20.3133V4.69628H25.3464L29.4178 7.99377L29.3741 16.3535H28.7246C28.3812 16.3535 28.1002 16.6283 28.1002 16.9642C28.1002 17.3 28.3812 17.5748 28.7246 17.5748H29.9923C30.3357 17.5748 30.6167 17.3061 30.6167 16.9703L30.6667 7.71287C30.6604 7.52968 30.5792 7.35259 30.4356 7.23657Z" fill="#381451"/>
      </svg>
      }
      {type === 'Retiro en tienda' && <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.66666 0.425781C1.11437 0.425781 0.666656 0.873496 0.666656 1.42578V26.0924C0.666656 26.6447 1.11437 27.0924 1.66666 27.0924H8.66666H9.99999H18H19.3333H26.3333C26.8856 27.0924 27.3333 26.6447 27.3333 26.0924V1.42578C27.3333 0.873496 26.8856 0.425781 26.3333 0.425781H19.3333H18H9.99999H8.66666H1.66666ZM8.66666 1.75911H1.99999V25.7591H8.66666V1.75911ZM9.99999 25.7591H18V1.75911H9.99999V25.7591ZM26 25.7591H19.3333V1.75911H26V25.7591ZM3.33333 5.09245C3.33333 4.72426 3.63181 4.42578 4 4.42578H6.66666C7.03485 4.42578 7.33333 4.72426 7.33333 5.09245C7.33333 5.46064 7.03485 5.75912 6.66666 5.75912H4C3.6318 5.75912 3.33333 5.46064 3.33333 5.09245ZM4 7.09245C3.63181 7.09245 3.33333 7.39092 3.33333 7.75911C3.33333 8.1273 3.6318 8.42578 4 8.42578H6.66666C7.03485 8.42578 7.33333 8.1273 7.33333 7.75911C7.33333 7.39092 7.03485 7.09245 6.66666 7.09245H4ZM3.33333 10.4258C3.33333 10.0576 3.6318 9.75912 3.99999 9.75912H6.66666C7.03485 9.75912 7.33333 10.0576 7.33333 10.4258C7.33333 10.794 7.03485 11.0924 6.66666 11.0924H3.99999C3.6318 11.0924 3.33333 10.794 3.33333 10.4258ZM3.99999 16.4258C3.6318 16.4258 3.33333 16.7243 3.33333 17.0924V21.0924C3.33333 21.4606 3.6318 21.7591 3.99999 21.7591C4.36818 21.7591 4.66666 21.4606 4.66666 21.0924V17.0924C4.66666 16.7243 4.36818 16.4258 3.99999 16.4258ZM11.3333 5.09245C11.3333 4.72426 11.6318 4.42578 12 4.42578H16C16.3682 4.42578 16.6667 4.72426 16.6667 5.09245C16.6667 5.46064 16.3682 5.75912 16 5.75912H12C11.6318 5.75912 11.3333 5.46064 11.3333 5.09245ZM12 7.09245C11.6318 7.09245 11.3333 7.39092 11.3333 7.75911C11.3333 8.1273 11.6318 8.42578 12 8.42578H16C16.3682 8.42578 16.6667 8.1273 16.6667 7.75911C16.6667 7.39092 16.3682 7.09245 16 7.09245H12ZM11.3333 10.4258C11.3333 10.0576 11.6318 9.75912 12 9.75912H16C16.3682 9.75912 16.6667 10.0576 16.6667 10.4258C16.6667 10.794 16.3682 11.0924 16 11.0924H12C11.6318 11.0924 11.3333 10.794 11.3333 10.4258ZM12 16.4258C11.6318 16.4258 11.3333 16.7243 11.3333 17.0924V21.0924C11.3333 21.4606 11.6318 21.7591 12 21.7591C12.3682 21.7591 12.6667 21.4606 12.6667 21.0924V17.0924C12.6667 16.7243 12.3682 16.4258 12 16.4258ZM20.6667 5.09245C20.6667 4.72426 20.9651 4.42578 21.3333 4.42578H24C24.3682 4.42578 24.6667 4.72426 24.6667 5.09245C24.6667 5.46064 24.3682 5.75912 24 5.75912H21.3333C20.9651 5.75912 20.6667 5.46064 20.6667 5.09245ZM21.3333 7.09245C20.9651 7.09245 20.6667 7.39092 20.6667 7.75911C20.6667 8.1273 20.9651 8.42578 21.3333 8.42578H24C24.3682 8.42578 24.6667 8.1273 24.6667 7.75911C24.6667 7.39092 24.3682 7.09245 24 7.09245H21.3333ZM20.6667 10.4258C20.6667 10.0576 20.9651 9.75912 21.3333 9.75912H24C24.3682 9.75912 24.6667 10.0576 24.6667 10.4258C24.6667 10.794 24.3682 11.0924 24 11.0924H21.3333C20.9651 11.0924 20.6667 10.794 20.6667 10.4258ZM21.3333 16.4258C20.9651 16.4258 20.6667 16.7243 20.6667 17.0924V21.0924C20.6667 21.4606 20.9651 21.7591 21.3333 21.7591C21.7015 21.7591 22 21.4606 22 21.0924V17.0924C22 16.7243 21.7015 16.4258 21.3333 16.4258Z" fill="#381451"/>
      </svg>
      }
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p><b>{subtitle2}</b></p>
      </div>
      <span className={selected ? 'active': ''}></span>
    </PlanBox>
  )
}
export default PlanType