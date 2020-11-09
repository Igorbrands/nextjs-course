import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  return (
    <div>
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map((recommendedProduct) => {
            return (
              <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  fetch('http://localhost:3333/recommended').then((response) => {
    response.json().then((data) => {
      setRecommendedProducts(data);
    });
  });
};
