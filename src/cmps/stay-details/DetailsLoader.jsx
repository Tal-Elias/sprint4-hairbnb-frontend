import blank from '../../assets/img/blank.png'

export function DetailsLoader() {

    const demoStays = Array.from({ length: 1 }, (_, i) => ({ _id: i + 101 }));

    return (
        <section className='secondary-layout'>
            <section className='stay-details stay-details-loader'>
                <h1 className="title title-loader" style={{ backgroundColor: "#ebebeb", color: "#ebebeb", lineHeight: '1.875rem', marginTop: '18px', width: '37%' }}>.</h1>
                <div className='stay-title-subheader stay-title-subheader-loader'>
                    <div className="name-subtitle name-subtitle-loader" style={{ backgroundColor: "#ebebeb", color: "#ebebeb", lineHeight: '15px', marginTop: '17px', marginBottom: '30px', width: '23%' }}>.</div>
                </div>
                <div>
                    <div className="images-container stay-imgs stay-imgs-loader grid">
                        {demoStays.map((img, index) => (
                            <img src={blank} alt={blank + index} key={index} className="img img-loader" style={{ backgroundColor: '#ebebeb' }} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}