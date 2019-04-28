import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingModal = ({
    data,
    onExit,
    onSubmit,
    onChangeRating,
    foodRating,
    environmentRating,
    serviceRating,
    priceRating,
    comment,
    onChangeComment
}) => {
    const starRatingConfig = {
        starRatedColor: 'orange',
        changeRating: onChangeRating,
        numberOfStars: 5,
        starDimension: '30px',
        starSpacing: '3px'
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <i
                    className='fa fa-close'
                    onClick={onExit}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    paddingBottom: 10,
                    borderBottom: '1px solid orange'
                }}
            >
                <h1 style={{ fontSize: '80%', margin: 0, padding: 0 }}>
                    Review
                </h1>
                <h1 style={{ fontSize: '100%', margin: 0, padding: 0 }}>
                    {data.name}
                </h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    margin: '30px 0',
                    flexDirection: 'column'
                }}
            >
                {/* ------------- Row 1 Start ------------- */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '100%'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Food</span>
                        <StarRatings
                            {...starRatingConfig}
                            rating={foodRating}
                            name='foodRating'
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Environment</span>
                        <StarRatings
                            {...starRatingConfig}
                            rating={environmentRating}
                            name='environmentRating'
                        />
                    </div>
                </div>
                {/* ------------- Row 1 End ------------- */}
                {/* ------------- Row 2 Start ------------- */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-around',
                        width: '100%'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Service</span>
                        <StarRatings
                            {...starRatingConfig}
                            rating={serviceRating}
                            name='serviceRating'
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Price</span>
                        <StarRatings
                            {...starRatingConfig}
                            rating={priceRating}
                            name='priceRating'
                        />
                    </div>
                </div>
                {/* ------------- Row 2 End ------------- */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '83%',
                        marginLeft: '8%',
                        marginTop: 20
                    }}
                >
                    <span>Comments</span>
                    <textarea style={inStyle.textarea} value={comment} onChange={onChangeComment} />
                </div>
            </div>
            <button onClick={onSubmit} style={inStyle.modalButton}>
                Done
            </button>
        </div>
    );
};

const inStyle = {
    modalButton: {
        width: 70,
        alignSelf: 'center',
        padding: '6px 10px',
        outline: 0,
        color: 'orange',
        backgroundColor: 'white',
        borderRadius: 5,
        border: '2px solid orange',
        boxShadow: '1px 1px 5px #ddd',
        margin: '15px 0',
        cursor: 'pointer',
        fontSize: '100%'
    },
    textarea: {
        resize: 'none',
        height: 150,
        fontSize: '80%',
        border: '1px solid #ddd',
        borderRadius: 10,
        outline: 0,
        padding: 5
    }
};

export default RatingModal;
