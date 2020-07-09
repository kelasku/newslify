import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 blog-title pb-5 font-weight-bold">
                                <strong>Latest Nagerian News and Stories Today</strong>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{  
                                        backgroundImage:
                                        'url(' +
                                        '/static/images/business.jpg'
                                         +
                                        ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Business</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/Business">
                                        <a>
                                            <h3 className="h1">Business</h3>
                                        </a>
                                    </Link>
                                    <p className="lead"><strong>Nigerias most comprihensive and detailed Business news nationwide</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        'url(' +
                                        '/static/images/politics.jpg'
                                         +
                                        ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Politics</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/Politics">
                                        <a>
                                            <h3 className="h1">Politics</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                       <strong>Clear and consice nationwide political news </strong> 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        'url(' +
                                        '/static/images/celeb.jpg'
                                         +
                                        ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Gossip</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/celebrity gossip">
                                        <a>
                                            <h3 className="h1">Gossip</h3>
                                        </a>
                                    </Link>
                                    <p className="lead"><strong>Keep Up With Latest Celebrity Gossip in Nigeria</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        'url(' +
                                        '/static/images/sports.jpg'
                                         +
                                        ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Sport</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/Sport">
                                        <a>
                                            <h3 className="h1">Sport</h3>
                                        </a>
                                    </Link>
                                    <p className="lead"><strong>We bring you up to speed with sport news around the world</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;
