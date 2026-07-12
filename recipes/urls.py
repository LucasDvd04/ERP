from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.ListRecipeView.as_view(), name='recipe-list'),
    path('create/', views.CreateRecipeView.as_view(), name='recipe-create'),
    path('detail/<int:pk>/', views.RetrieveRecipeView.as_view(), name='recipe-detail'),
    path('update/<int:pk>/', views.UpdateRecipeView.as_view(), name='recipe-update'),
    path('delete/<int:pk>/', views.DeleteRecipeView.as_view(), name='recipe-delete'),

    path('items/list/', views.ListRecipeItemsView.as_view(), name='recipe-items-list'),
    path('items/create/', views.CreateRecipeItemsView.as_view(), name='recipe-items-create'),
    path('items/detail/<int:pk>/', views.RetrieveRecipeItemsView.as_view(), name='recipe-items-detail'),
    path('items/update/<int:pk>/', views.UpdateRecipeItemsView.as_view(), name='recipe-items-update'),
    path('items/delete/<int:pk>/', views.DeleteRecipeItemsView.as_view(), name='recipe-items-delete'),

]