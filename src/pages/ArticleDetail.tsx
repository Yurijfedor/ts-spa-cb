import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Container } from "../components/Container";
import { FiChevronLeft } from "react-icons/fi";


const ArticleDetail: React.FC = () => {

  const { articlesList } = useAppSelector((state) => state.articles);
  const { articleId } = useParams();
  const locationUrl = useLocation();
  const navigate = useNavigate();

  const articleItem: any = articlesList.find(({ id }) => id == articleId);
  const handleClick = () => {
    navigate(locationUrl?.state?.from ?? "/");
  };

  const {
    title,
    imageUrl, 
  } = articleItem;
  return (
    <Container>
      <img
        src={imageUrl}
        alt={title}
      />
      <h1>{title}</h1>
      <p><span style={{backgroundColor: "yellow"}}>Lorem</span> <span style={{backgroundColor: "yellow"}}>nasa</span> ipsum dolor sit amet consectetur adipisicing elit. Delectus sit ullam at obcaecati inventore laudantium voluptatem commodi suscipit quibusdam sunt, fugit, quisquam accusantium, quo officiis illo ab doloribus! Omnis nobis laborum ex nihil voluptatem nam rerum dolorum qui asperiores in error officia molestias porro cupiditate, dolorem modi ad enim cum ipsum quo ratione. Tempore assumenda praesentium iusto numquam nulla, optio earum quidem quae est provident voluptates perferendis eum laborum! Animi amet temporibus odio porro eum nesciunt enim blanditiis voluptatibus molestias odit! A autem iusto voluptas quia magni molestias voluptatem quo, cupiditate architecto iure sunt quibusdam ab pariatur excepturi nobis nihil veritatis voluptates cum delectus, quasi magnam ea nam harum? Minus veritatis eligendi iste hic, id earum quas illum, aut aliquam porro adipisci doloribus esse rerum eius nam repudiandae et deleniti laboriosam ipsam sapiente nihil voluptate. Fuga, rerum incidunt. Dolores earum, assumenda modi, molestias consequatur neque exercitationem enim numquam ut doloremque, vero officiis dolore? Expedita provident vitae possimus odio maiores ipsum ea dolorum itaque incidunt pariatur, reprehenderit quo modi voluptatem necessitatibus. Tempore ipsa incidunt aliquam! Recusandae iusto optio provident error quis deserunt voluptates iure modi ducimus assumenda adipisci, ad cum amet sequi excepturi nisi nemo magnam minima fugit possimus. Nesciunt facere, quia eum sequi labore suscipit saepe aspernatur adipisci nobis distinctio ipsam accusantium perspiciatis illum hic cupiditate eveniet odit voluptate velit dolorem aut illo non eligendi beatae. Architecto maxime inventore doloribus dolorem. Ullam doloremque maxime quibusdam dolor libero laboriosam fuga, inventore nihil porro omnis maiores delectus nesciunt perspiciatis eveniet deleniti! Excepturi, blanditiis. Assumenda iusto accusantium nam eaque inventore amet deleniti illo perspiciatis. Quibusdam asperiores vitae aperiam qui ratione libero eum molestiae nihil totam, doloribus aliquam vero quis temporibus. Cumque, illo, provident dignissimos repudiandae vel doloribus similique assumenda dolorem aliquam commodi nihil officiis fugiat sit aperiam? Eos adipisci tempore delectus beatae placeat voluptates? Odit, nesciunt? Non vel odio ex quidem iure. Temporibus vero architecto eos laboriosam illum quisquam asperiores, repellat impedit, soluta adipisci dolore aperiam dolorem repudiandae ipsa illo voluptate ullam corrupti culpa earum dicta saepe! Eum dicta aut maxime iusto recusandae molestiae natus aliquam delectus, quod alias temporibus inventore eaque facere hic ab. Doloribus amet voluptatem earum, molestias eius odit consequatur voluptatum aspernatur asperiores facere? Ducimus dolores quis, earum quod quisquam esse, deleniti reprehenderit, illo ullam architecto assumenda. Consectetur explicabo harum ab dolore. Odit amet nobis beatae enim iure, id dicta, dolores eaque molestiae dolorum sed ut veniam eos numquam excepturi reiciendis magnam at molestias in quas. Quibusdam nam fugiat voluptates facilis amet dolorum veritatis sequi placeat minima cum voluptatibus, accusamus tempora! Incidunt non distinctio obcaecati, explicabo iusto dicta tempore autem accusamus corrupti minima cumque numquam aliquam rem, amet quam doloribus labore nesciunt aut nisi. Fuga error cupiditate voluptas consequuntur deserunt dolorum voluptatum corporis aut fugit numquam pariatur, natus quia. Unde quos, officiis tempore porro atque quod est magnam inventore ipsam quaerat consectetur laborum tenetur ratione vel, provident quibusdam vero, asperiores totam alias quasi eum officia blanditiis! Iusto aperiam hic enim quaerat numquam necessitatibus voluptate, assumenda nobis, minus quo deleniti voluptatibus!</p>

      
        <button
          onClick={handleClick}
        >
          <FiChevronLeft />
          <span className="text-text-accent opacity-[1] z-10">
            return to job board
          </span>
        </button>
    </Container>
  );
};

export default ArticleDetail;
