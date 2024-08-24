from django.shortcuts import render
from django.http import JsonResponse
import random
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

# Random Number Endpoint
def randnumber(request):
    min_value = int(request.GET.get('min', 1))
    max_value = int(request.GET.get('max', 100))
    
    if min_value > max_value:
        return JsonResponse({"error": "min_value cannot be greater than max_value"}, status=400)
    
    random_num = random.randint(min_value, max_value)
    return JsonResponse({"randnumber": random_num})


# Quote Endpoint
ADJECTIVES = ['amazing', 'incredible', 'fantastic', 'brilliant', 'unstoppable']

QUOTES = [
    "You are {adj}, {name}! Keep pushing forward!",
    "Believe in yourself, {name}, because you are {adj}!",
    "{name}, your {adj} efforts will lead you to success!"
]

@csrf_exempt
def motivational_quote(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name', 'Friend')
    else:
        name = request.GET.get('name', 'Friend')

    adjective = random.choice(ADJECTIVES)
    quote = random.choice(QUOTES).format(name=name, adj=adjective)
    return JsonResponse({"quote": quote})