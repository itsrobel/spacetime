from django.db import models


class Flash(models.Model):
    ProgressType = models.TextChoices("MASTERED", "LEARNING", "UNVERSED")
    deck_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    progress = models.CharField(blank=False, choices=ProgressType, max_length=8)


class Deck(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    user_id = models.CharField(max_length=255)
    flashcards = models.ManyToManyField(Flash)  # NOTE: This might not be nessary
    public = models.BooleanField()  # TODO: Add default value
    # shared_with = models.ManyToManyField("User")  #TODO: add the users model later
