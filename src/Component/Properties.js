
import '../App.css'

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$4,500,000",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 2,
    title: "Modern Apartment in NYC",
    price: "$1,200,000",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 3,
    title: "Beach House in Malibu",
    price: "$3,800,000",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 4,
    title: "Penthouse in Chicago",
    price: "$2,750,000",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 5,
    title: "Suburban Home in Austin",
    price: "$850,000",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1572120360610-7e122b8eb1cd",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 6,
    title: "Studio Apartment in San Francisco",
    price: "$950,000",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 7,
    title: "Countryside Cottage",
    price: "$620,000",
    location: "Asheville, NC",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 8,
    title: "Mountain Retreat",
    price: "$1,100,000",
    location: "Aspen, CO",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 9,
    title: "Historic Home in Savannah",
    price: "$980,000",
    location: "Savannah, GA",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 10,
    title: "Desert Home in Phoenix",
    price: "$1,300,000",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 11,
    title: "Waterfront Condo in Miami",
    price: "$2,200,000",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1600585153925-840c6e4a2352",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 12,
    title: "Modern Loft in Seattle",
    price: "$1,100,000",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1600585154781-8f3b87b7d8d0",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 13,
    title: "Colonial House in Boston",
    price: "$1,700,000",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 14,
    title: "Farmhouse in Vermont",
    price: "$950,000",
    location: "Stowe, VT",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 15,
    title: "Lakefront Property",
    price: "$2,600,000",
    location: "Lake Tahoe, CA",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 16,
    title: "High-Rise Condo in Denver",
    price: "$890,000",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1600585154781-8f3b87b7d8d0",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 17,
    title: "Eco-Friendly Home",
    price: "$1,200,000",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 18,
    title: "Tiny House in the Woods",
    price: "$300,000",
    location: "Flagstaff, AZ",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 19,
    title: "Luxury Ranch in Texas",
    price: "$3,300,000",
    location: "Dallas, TX",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 20,
    title: "Modern Duplex",
    price: "$750,000",
    location: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 21,
    title: "Urban Townhouse",
    price: "$1,000,000",
    location: "Philadelphia, PA",
    image: "https://images.unsplash.com/photo-1560185008-5b9589017f29",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 22,
    title: "Skyscraper Condo",
    price: "$1,950,000",
    location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    type: "Apartment",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 23,
    title: "Historic Brownstone",
    price: "$2,400,000",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 24,
    title: "Modern Bungalow",
    price: "$870,000",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    type: "House",
    email: "suraj@123",
    phone: "123456789"
  },
  {
    id: 25,
    title: "Ski Chalet in Utah",
    price: "$2,900,000",
    location: "Park City, UT",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    type: "Villa",
    email: "suraj@123",
    phone: "123456789"
  }
];


export default properties;