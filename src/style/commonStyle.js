import bannerBg1 from '../assets/images/Pathmain-bg-bottom.png'
import bannerBg2 from '../assets/images/Pathbg.png'
import processBg from '../assets/images/Group12.png'
import aboutUsBg from '../assets/images/Rectangleabout-bg.png'

export const headerMenuItemStyle = { fontWeight: 600, fontSize: '15px', lineHeight: '24px', color: '#606060' }
export const footerWrapperStyle = {
    height: 507,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    bgcolor: '#E7F1F2',
    mt: '122px'
}

export const footerNormalTypoStyle = { fontWeight: 400, fontSize: '15px', lineHeight: '30px' }
export const footerBoldTypoStyle = { fontWeight: 600, fontSize: '13px', lineHeight: '24px', mb: '15px' }
export const centeredDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}
export const footerMenuWrapperStyle = {
    ...centeredDiv,
    padding: '0 150px 46px 150px'
}
export const headerWrapperStyle = {
    ...centeredDiv,
    padding: '20px 60px'
}
export const testimonyWrapper = {
    width: 503, height: 203,
    padding: '29px 27px 30px 31px',
    boxShadow: '0px 3px 20px 0px #0000001A',
    borderRadius: '12px',
}
export const buttonStyle = { bgcolor: '#FF6400', width: '248px', height: '54px', borderRadius: '30px' }
export const bannerBoldTypoStyle = { fontSize: '47px', fontWeight: 700, lineHeight: '58.99px', textTransform: 'uppercase' }
export const bannerBtnStyle = { bgcolor: '#FF6400', borderRadius: '30px', textTransform: 'none' }
export const bannerWrapperStyle = { background: '#E7F1F2', backgroundImage: `url(${bannerBg2})`, backgroundPosition: 'top right', backgroundRepeat: 'no-repeat' }
export const bannerLeftSectionWrapper = { display: 'flex', alignItems: 'center', gap: '80px', backgroundImage: `url(${bannerBg1})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }
export const bannerNormalTypo = { fontSize: '18px', fontWeight: 400, lineHeight: '22.59px', mb: '20px' }
export const bannerBoldTypo1 = { fontSize: '28px', fontWeight: 600, lineHeight: '35.14px', mb: '20px' }
export const bannerBtnWrapper = { display: 'flex', justifyContent: 'center', gap: '16px' }
export const bannerBoldTypo2 = { fontSize: '16px', fontWeight: 600, lineHeight: '20.08px', mb: '20px' }
export const serviceWrapper = { display: 'flex', justifyContent: 'center', px: '120px', pb: '120px' }
export const serviceTypoStyle = { fontSize: '47px', fontWeight: 700, lineHeight: '58.99px', mb: '60px', mt: '10px' }
export const serviceSectionStyle = {
    width: '340px', height: '336px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
}
export const processWrapperStyle = {
    width: '340px', height: '336px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${processBg})`
}
export const processSectionWrapper = { display: 'flex', justifyContent: 'center' }
export const processTypoWrapper = { fontSize: '47px', fontWeight: 700, lineHeight: '58.99px', mb: '60px' }
export const aboutWrapper = {
    backgroundImage: `url(${aboutUsBg})`, mb: '113px', backgroundRepeat: 'no-repeat'
}