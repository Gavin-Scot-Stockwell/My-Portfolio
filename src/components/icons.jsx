export default function icons(prop) {
    const styles = {
        styles: {
            marginBottom:prop.y,
            marginRight:prop.x,
            width: '30px',
            height: '30px',
        }
        } 


return (
<img style={styles.styles} src={prop.src} alt={prop.alt}></img>
 );
}