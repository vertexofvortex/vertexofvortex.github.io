import { ProjectCard } from "..";
import s from "./ProjectsBlock.module.scss";

interface Props {
  onlyFeatured?: boolean;
}

export function ProjectsBlock({ onlyFeatured }: Props) {
  return (
    <>
      {onlyFeatured && (
        <div className={`block ${s.projects}`}>
          <div className={`cmd ${s.cmd}`}>
            <span style={{ color: "var(--vim-vimVar)" }}>user@vertex: ~</span>{" "}
            ls ./projects
          </div>
          <div className={s.out}>
            <ProjectCard
              pictureUrl="/pictures/mock.jpg"
              title="VK RSS Parser"
              description="Сервис, который позволяет подключить группы со своего аккаунта ВКонтакте и привязать к ним источники RSS-лент, с которых будут опрашиваться новости. Интересующие вас посты затем можно выбрать, отредактировать и опубликовать в группе вместе с красивым сгенерированным сниппетом-картинкой"
              buttons={[
                {
                  className: "button-link blue",
                  icon: `\udb80\udea2`,
                  href: "",
                  text: "Репозиторий с исходным кодом",
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
                  icon: `\udb81\udd9f`,
                  href: "",
                  text: "Перейти на сайт",
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
                  icon: `\udb81\udd9f`,
                  href: "https://project-armor.io/main",
                  text: "Перейти на сайт",
                },
              ]}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsBlock;
