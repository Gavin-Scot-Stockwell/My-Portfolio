import Badges from '../components/badges';
import Icons from '../components/icons';
import Even from '../style/even';
import forDiv from '../style/footerDiv';

export default function Footer() {
    return(
        <div style={forDiv.place}>
        <p style={Even.format}>
        <Icons src={'./assets/icons8-github-30.png'} alt={'github logo'} x={'0px'} y={'-10px'}/>
        <Badges title={'GitHub'} backColor={'caracole'} link={'https://github.com/Gavin-Scot-Stockwell'}/>
        </p>
        
        <p style={Even.format}>
        <Icons src={'./assets/icons8-linkedin-48.png'} alt={'Linkedin logo'} x={'0px'} y={'-10px'}/>
        <Badges title={'Linkedin'} backColor={'#0288d1'} link={'https://www.linkedin.com/in/gavin-stockwell-803b50345/'}/>
        </p>
        
        <p style={Even.format}>
        <Icons src={'./assets/icons8-stack-overflow-48.png'} alt={'Stack Overflow logo'} x={'0px'} y={'-10px'}/>
        <Badges title={'Stack Overflow'} backColor={'#e56701'} link={'https://stackoverflow.com/users/29250155/gavin'}/>
        </p>
        </div>
    )

}