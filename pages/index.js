/* eslint-disable @next/next/no-img-element */
import { Card, CardGroup } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="welcome">Welcome to <b>Curl Power</b>, {user.displayName}!</h1>
      <p>
        Thank you for joining <b>Curl Power</b>, a community where we share our curly hair care journey and help individuals figure out how to best take care of their curls so they can begin embracing their natural hair! This is all about learning the best way to take care of you, because you should love yourself how you are! It is recommeneded that if you are unsure of your hair type, you read the following information so you are able to better navigate through Curl Power&#39;s Routine and Product Collections.
      </p>

      <h1 className="hair-type-title">How to Identify Your Hair Type</h1>
      <p>This is where it all begins. Determining your hair type will make your life so much easier. This is the most essential step to your hair care journey: unlocking routines and products catered to your hair type. There are four hair type categories: straight, wavy, curly, and kinky/coily. For each category, there are three subcategories A, B, and C. The differences amongst the cateogries and subcategories are explained below.</p>

      <img width={500} style={{ margin: '0 auto' }} src="/./images/CurlyHairChart.png" alt="Hair Type Chart" />

      <h2 className="hair-type-title">Type 1 Hair: Straight</h2>
      <CardGroup className="card-groups">
        <Card>
          <Card.Body>
            <Card.Title>Type 1A</Card.Title>
            <Card.Text>The straighest of all straight hair. Lies flat on the scalp, little to no wave or curl pattern, leaving very little volume. Having this hair type can make styling difficult, leaving hair unable to hold different styles. This hair type can be thin and fine and is oily, hence the glossiness you often notice with type 1A hair. </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 1B</Card.Title>
            <Card.Text>The most common hair type. It is of medium thickness having some volume. Type 2A hair is able to hold styles. </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 1C</Card.Title>
            <Card.Text>This hair type is thick, coarse, with some volume, and has a very slight wave pattern to it. The hair lies flat on the scalp, but is more ideal for styling as it can hold a curls and waves.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <h2 className="hair-type-title">Type 2 Hair: Wavy</h2>
      <CardGroup className="card-groups">
        <Card>
          <Card.Body>
            <Card.Title>Type 2A</Card.Title>
            <Card.Text>This hair type has a slight wave pattern, appearing straight at the roots with slightly wavy patterns towards the end. Type 2A hair is finer and thinner than the other Type 2 subcategories. It is easy to style this hair type if you want to style curly or wavy.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 2B</Card.Title>
            <Card.Text>With this hair type, you will notice more defined waves. The hair will appear straight on the head but will start appearing wavy at the midpoint. If you have this hair type, you will notice it can be frizzy at times. The best hair type to create soft romantic hairstyles or beachy waves.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 2C</Card.Title>
            <Card.Text>This hair type creates the most defined waves. Waves begin at the top of the head to the ends of the hair, creating an S shape. Frizziness is common with this hair type in humind climates, if you know... you know.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <h2 className="hair-type-title">Type 3 Hair: Curly</h2>
      <CardGroup className="card-groups">
        <Card>
          <Card.Body>
            <Card.Title>Type 3A</Card.Title>
            <Card.Text>This hair type is known as the loose curls. The hair is not as thick. The hair will create an S shape, but will be flatter at the roots than other curly hair. Type 3A hair does not require the use of many products, but still very important to be aware of causing damage. We do not want to damage any of the natural curls, so be careful when styling with heat or pulling the hair back. This pulls at the scalp and hairline, which can damage the natural curl pattern.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 3B</Card.Title>
            <Card.Text>This is when it gets kind of complicated... Type 3B is thicker and curlier, creating wider and tigher curls. If you have this hair type, you have experienced stubborn frizziness and dryness. This hair type requires lots and lots of moisture. To protect your curl patterns, avoid using heat on this hair type.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 3C</Card.Title>
            <Card.Text>The curls are super thick and tight. The hair will be bouncy and voluminous, the hair will have a corkscrew shape to it. Like 3A and 3B, 3C is also very prone to frizziness and dryness. It is essential to keep hair hydrated. And like all curly hair, avoid styling with heat!</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <h2 className="hair-type-title">Type 4 Hair: Kinky/Coils</h2>
      <CardGroup className="card-groups">
        <Card>
          <Card.Body>
            <Card.Title>Type 4A</Card.Title>
            <Card.Text>This hair type creates tight coils that are springy with lots of movement. Just like curly hair, kinky/coily hair also requires tons of moisture. There is a constant debate in the curly hair community whether these curls should be free or kept in protective styles, of course, the choice is up to you and what works best for you.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 4B</Card.Title>
            <Card.Text>This hair type is less defined than 4A, creating a Z shaped pattern. The curls get tigher here, but thickness can vary from person to person. Once again, prone to frizziness. Curly and kinky hair are some of more delicate hair types, so just like the other hair types, avoiding heat damage and pulling of the hair is very important for curl health.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Type 4C</Card.Title>
            <Card.Text>This hair type creates the tightest curls. It is very coarse and prone to shrinkage. Be very gentle and loving towards this hair type, as it can easily result in breakage. Hydration is key here! This hair type allows for versatility and volume. Once you learn how to maintain and care for this hair type, creating styles will become an endless adventure!</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* <p>Click the button below to logout!</p>
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
        Sign Out
      </button> */}
    </div>
  );
}

export default Home;
