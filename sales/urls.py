from django.urls import path
from sales import views

urlpatterns = [
    path('create/', views.SaleCreateView.as_view(), name='sale-create'),
    path('list/', views.SaleListView.as_view(), name='sale-list'),
    path('detail/<int:pk>', views.SaleDetailView.as_view(), name='sale-detail'),

    path('items/create/', views.SaleItemCreateView.as_view(), name='sale-item-create'),
    path('items/list/', views.SaleItemListView.as_view(), name='sale-item-list'),
    path('items/detail/<int:pk>', views.SaleItemDetailView.as_view(), name='sale-item-detail'),
    path('items/update/<int:pk>', views.SaleItemUpdateView.as_view(), name='sale-item-update'),
    path('items/delete/<int:pk>', views.SaleItemDetailView.as_view(), name='sale-item-delete'),
]