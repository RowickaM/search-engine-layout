import React, {Component} from 'react';
import styles from './articleList.module.css'
import ArticleItem from "./articleItem/ArticleItem";

class ArticleList extends Component {
    state = {
        blur: false,
        listOfArticles:[
            {
                id: 'id-1',
                show: false,
                title: 'Analiza serii czasowych w Pythonie z wykorzystaniem danych opserwacji Zemii',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati perspiciatis quibusdam repellendus unde. Architecto dolor et expedita, fugiat quasi quidem quo quod saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deserunt dicta dolore ea eveniet obcaecati',
                number: 'PROGRAMISTA 11/2019'
            },
            {
                id: 'id-2',
                show: false,
                title: 'Analiza serii czasowych w Pythonie z wykorzystaniem danych opserwacji Zemii',
                desc: 'OPIS',
                number: 'PROGRAMISTA 11/2019'
            },
            {
                id: 'id-3',
                show: false,
                title: 'Analiza serii czasowych w Pythonie z wykorzystaniem danych opserwacji Zemii',
                desc: 'OPIS',
                number: 'PROGRAMISTA 11/2019'
            },
            {
                id: 'id-4',
                show: false,
                title: 'Analiza serii czasowych w Pythonie z wykorzystaniem danych opserwacji Zemii',
                desc: 'OPIS',
                number: 'PROGRAMISTA 11/2019'
            },
            {
                id: 'id-5',
                show: false,
                title: 'Analiza serii czasowych w Pythonie z wykorzystaniem danych opserwacji Zemii',
                desc: 'OPIS',
                number: 'PROGRAMISTA 11/2019'
            },
        ]
    };

    hoverHandler = evt =>{
        const e = evt.target;
        let tab = [...this.state.listOfArticles];

        for(let i = 0; i < tab.length; i++){
            if(e.dataset.id === tab[i].id){
                tab[i].show=!tab[i].show;
                this.setState({listOfArticles:tab, blur:tab[i].show});
                break;
            }
        }
        console.log("hoverHandler");

    };

    render() {
        const listArticles = this.state.listOfArticles.map((item) =>
            <ArticleItem
                key={item.id}
                id={item.id}
                show={item.show}
                hover={this.hoverHandler}
                title={item.title}
                desc={item.desc}
                number={item.number}
            />
        );

        return (
            <div className={`${styles.list}`}>
                {listArticles}
                <div className={`${this.state.blur && window.innerWidth > 1024 ? styles.blur: ''}`} />
            </div>
        );
    }
}

export default ArticleList;