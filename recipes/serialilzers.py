from rest_framework import serializers
from recipes.models import Recipe, RecipeItems

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeItems
        fields = '__all__'