import easybank from "../../assets/easybankimage.png"

const HomePage = () => {
    return (
        <section className="hero-page">
            <div>
                <h3>Next generation digital banking</h3>
                <p>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="btn">Request Invite</button>
            </div>
            <img src={easybank} alt="" />
        </section>
    )
}

export default HomePage