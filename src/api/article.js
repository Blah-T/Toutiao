import request from '@/utils/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}

export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}

export const addCollect = target => {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/collections',
    data: {
      target
    }
  })
}

export const deleteCollect = target => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/collections/${target}`
  })
}
