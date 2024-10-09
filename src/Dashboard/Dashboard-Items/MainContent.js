import { Link, useNavigate } from 'react-router-dom';

function MainContent() {
    return (
        <>
            {/* ======= Main Content ======= */}
            <main id="main" className="main">
                <div className="pagetitle item-center">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb fs-1">

                            <Link to={"/student"}>Student</Link>
                            <Link>/</Link>
                            <Link to={"/faculty"}> Faculty</Link>

                            
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        {/* Add your content here */}
                    </div>
                </section>
            </main>
            {/* End Main Content */}
        </>
    )
}

export default MainContent;