import '../css/Loading.css';
/* HTML and CSS from 
    https://loading.io/css/
*/ 
const Loading = () => {
    return (
        <section className="loading-background">
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
export default Loading;