from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Flash


def index(request):
    flash_cards = Flash.objects.all().values()
    template = loader.get_template("index.html")
    print("flash cards: ", flash_cards)

    context = {
        "flash_cards": flash_cards,
    }
    return HttpResponse(template.render(context, request))

    # return HttpResponse(req)


def create_flash(request):
    if request.method == "POST":
        title = request.POST["flash_name"]
        content = request.POST["flash_content"]
        progress = "UNVERSED"
        deck_id = 1
        flash = Flash(title=title, content=content, progress=progress, deck_id=deck_id)
        print("flash: ", flash)
        print(flash.title)
        flash.save()
        return render(request, "index.html")
