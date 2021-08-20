import React, {useEffect} from "react";
import {setLesson} from "../../Store/Reducers/lessonReducer";
import {useDispatch} from "react-redux";

//Hook remove item from lesson`s article by id element

const useChangeArticle = (type, data, inpType, newItem) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(data).length !== 0) {

            if(type === 'change'){
                if(inpType === 'header'){
                    data.theme = data.text
                }else {
                    data.article.map((item) => {
                        if (item.id === data.articleId) {
                            const index = data.article.findIndex(el => el === item);
                            data.article[index].text = data.text;
                        }
                    });
                }

            }else if(type === 'delete'){
                data.article.map((item) => {
                    if (item.id === data.articleId) {
                        const index = data.article.findIndex(el => el === item);
                        data.article.splice(index, 1);
                    }
                });
            }
            dispatch(setLesson({...data, article: data.article}));
        }
    },[data]);


}
export default useChangeArticle;