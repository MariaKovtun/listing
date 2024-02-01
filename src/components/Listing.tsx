type ItemType = {
    listing_id: number,
    url: string,
    MainImage: {
        url_170x135:string
    },
    title: string,
    currency_code: string,
    price:string,
    quantity:number,
    state: string
}

type ItemsType = {
    items: ItemType[]
}


const Listing = (data:ItemsType) => {
    return (
        <div className="item-list">
            {data.items.filter(item => item.state != "removed").map(item => <ListingItem key={item.listing_id} {...item} />)}
        </div>
    )
}

function ListingItem (item:ItemType) {
    let levelPostfix = "low";
    if (item.quantity > 20) levelPostfix = "high"; else {
        if (item.quantity >= 10) levelPostfix = "medium"
    }

    let levelClass = `item-quantity level-${levelPostfix}`;

    return (
        <>
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_170x135}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{(item.title.length > 50) ? `${item.title.slice(0,51)}...` : item.title}</p>
                <p className="item-price">
                    {item.currency_code.replace("USD","$").replace("EUR","€")}{item.price}
                </p>
                <p className={levelClass}>{item.quantity} left</p>
            </div>
        </div>
        </>
        
    )
}

export default Listing