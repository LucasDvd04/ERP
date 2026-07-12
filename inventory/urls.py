from django.urls import path
from inventory import views

urlpatterns = [
    path('list/', views.ListStockView.as_view(), name='stock-list'),
    path('detail/', views.DetailStockView.as_view(), name='stock-list'),

    path('transactions/list', views.ListInventoryTransactionView.as_view(), name='stock-list'),
    path('transactions/create', views.CreateInventoryTransactionView.as_view(), name='stock-list'),
    path('transactions/detail/<int:pk>/', views.DetailInventoryTransactionView.as_view(), name='stock-list'),
    path('transactions/update/<int:pk>/', views.UpdateInventoryTransactionView.as_view(), name='stock-list'),

]