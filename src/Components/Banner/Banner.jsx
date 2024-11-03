import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className='space-y-5'> 
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <button className="btn text-white bg-[#23BE0A] font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;