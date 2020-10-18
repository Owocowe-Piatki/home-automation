"""
core URL Configuration
https://docs.djangoproject.com/en/3.1/topics/http/urls/
"""
from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Admin settings
admin.site.site_header = "Home administration"
admin.site.site_title = "Home admin"
admin.site.index_title = "Administration"
admin.site.enable_nav_sidebar = False

# Frontend view protected by auth middleware 
@login_required
def frontend_view(request):
    return render(request, "frontend.html")

urlpatterns = [
    # admin site
    path("admin/doc/", include("django.contrib.admindocs.urls")),
    path("admin/", admin.site.urls),
    # frontend template path
    path("", frontend_view, name="frontend"),
    # user authentication
    path("users/", include('apps.users.urls')),
]

# Enable media and static files in debug mode
if settings.DEBUG:
    from django.conf.urls.static import static

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
