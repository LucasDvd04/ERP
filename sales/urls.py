from django.urls import path
from sales import views

urlpatterns = [
    path('sales/', views.SaleListView.as_view(), name='sale-list'),
]