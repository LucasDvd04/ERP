from django.shortcuts import render
from rest_framework import generics
from recipes.models import Recipe, RecipeItems
from recipes.serialilzers import RecipeSerializer, RecipeItemsSerializer

class ListRecipeView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class CreateRecipeView(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RetrieveRecipeView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class UpdateRecipeView(generics.UpdateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class DeleteRecipeView(generics.DestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


    
class ListRecipeItemsView(generics.ListAPIView):
    queryset = RecipeItems.objects.all()
    serializer_class = RecipeItemsSerializer

class CreateRecipeItemsView(generics.CreateAPIView):
    queryset = RecipeItems.objects.all()
    serializer_class = RecipeItemsSerializer    

class RetrieveRecipeItemsView(generics.RetrieveAPIView):
    queryset = RecipeItems.objects.all()
    serializer_class = RecipeItemsSerializer

class UpdateRecipeItemsView(generics.UpdateAPIView):
    queryset = RecipeItems.objects.all()
    serializer_class = RecipeItemsSerializer

class DeleteRecipeItemsView(generics.DestroyAPIView):
    queryset = RecipeItems.objects.all()
    serializer_class = RecipeItemsSerializer