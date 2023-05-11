import { Link } from "react-router-dom";
import { ProjectCard, Section } from "..";
import { IProject } from "../../models";
import s from "./ProjectsBlock.module.scss";

interface Props {
  data: IProject[];
}

export function ProjectsBlock({ data }: Props) {
  console.log(data);

  return (
    <Section className={s.projects} promptCommand="ls ./projects -U | head -2">
      <div className={s.content}>
        {data.map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
      <div className={s.moreButton}>
        <Link to="/projects" className="button-link">
          {`\udb80\udd69`} Мои остальные работы
        </Link>
      </div>
    </Section>
  );
}

export default ProjectsBlock;

{
  /* <ProjectCard
      pictureUrl="/pictures/mock.jpg"
      title="VK RSS Parser"
      description="Сервис, который позволяет подключить группы со своего аккаунта ВКонтакте и привязать к ним источники RSS-лент, с которых будут опрашиваться новости. Интересующие вас посты затем можно выбрать, отредактировать и опубликовать в группе вместе с красивым сгенерированным сниппетом-картинкой"
      buttons={[
        {
          className: "button-link blue",
          href: "",
          text: "\udb80\udea2 Репозиторий с исходным кодом",
        },
      ]}
    />
    <ProjectCard
      pictureUrl="/pictures/mock.jpg"
      title="Digital Assets Capital"
      description="Приватный инвестиционный фонд, в разработке которого я принимал далеко не самое последнее участие"
      buttons={[
        {
          className: "button-link blue",
          href: "",
          text: "\udb81\udd9f Перейти на сайт",
        },
      ]}
    />
    <ProjectCard
      pictureUrl="/pictures/mock.jpg"
      title="Project Armor"
      description="Польская киберспортивная организация, имеет свой состав по различным играм, а также занимается проектами в сфере криптоиндустрии и NFT. Я занимался разработкой их веб-сайта"
      buttons={[
        {
          className: "button-link blue",
          href: "https://project-armor.io/main",
          text: "\udb81\udd9f Перейти на сайт",
        },
      ]}
    /> */
}
