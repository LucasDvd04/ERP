from django.urls import path
from materials import views

urlpatterns = [
    path('create/', views.CreateMaterialView.as_view(), name='material_create'),
    path('list/', views.ListMaterialView.as_view(), name='material_list'),
    path('detail/<int:pk>/', views.RetrieveMaterialView.as_view(), name='material_list'),
    path('update/<int:pk>/', views.UpdateMaterialView.as_view(), name='material_update'),
    path('delete/<int:pk>/', views.DeleteMaterialView.as_view(), name='material_delete'),

    path('supplier/', views.ListCreateSupplierView.as_view(), name='supplier_list_create'),
    path('supplier/<int:pk>/', views.RetrieveUpdateDeleteSupplierView.as_view(), name='supplier_retrieve_update_delete'),
] 