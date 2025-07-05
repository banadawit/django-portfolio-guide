// src/data/techniques.ts
import type { Technique } from "../types/Technique";

const techniques: Technique[] = [
  {
    id: 1,
    title: "Complex ORM Queries (F/Q Objects)",
    content:
      "Demonstrates deep database knowledge and performance optimization by performing operations directly in the database. Crucial for advanced search and reporting features.",
    relevance: [
      "Complex search in a library app",
      "Dynamic reporting in an ERP",
      "Analytics dashboards",
    ],
    difficulty: "Advanced",
    category: "Database",
    icon: "database",
    codeExample: `from django.db.models import F, Q
# Example: Increment counter atomically
Product.objects.filter(id=1).update(views=F('views') + 1)

# Complex query with Q objects
results = Book.objects.filter(
    Q(author__name__icontains='django') |
    Q(title__icontains='web')
).exclude(
    Q(status='archived') &
    Q(pub_date__year=2020)
)`,
    useCases: [
      {
        title: "E-commerce Product Filtering",
        description:
          "Implementing advanced product filters with multiple conditions",
        implementationTips: [
          "Use Q objects for OR conditions",
          "Chain filters for AND conditions",
          "Consider adding database indexes for frequently queried fields",
        ],
      },
    ],
    relatedSkills: [1, 2], // Core Django and Database Management
    resources: {
      documentation:
        "https://docs.djangoproject.com/en/stable/topics/db/queries/#complex-lookups-with-q-objects",
      packages: ["django-filter"],
    },
  },
  {
    id: 2,
    title: "Customizing the Django Admin",
    content:
      "Shows framework extensibility and the ability to build efficient internal tools. Add custom actions for bulk updates or entirely new views for dashboards.",
    relevance: [
      "Bulk-publishing articles",
      "Sales dashboard inside admin",
      "Content management workflows",
    ],
    difficulty: "Intermediate",
    category: "Admin",
    icon: "settings",
    codeExample: `from django.contrib import admin

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'publish_date')
    list_filter = ('status', 'publish_date')
    search_fields = ('title', 'content')
    actions = ['make_published']
    
    def make_published(self, request, queryset):
        queryset.update(status='published')`,
    useCases: [
      {
        title: "CMS for News Website",
        description: "Custom admin interface for editorial workflow",
        implementationTips: [
          "Override admin templates for branding",
          "Add custom columns to list views",
          "Implement user-specific admin views",
        ],
      },
    ],
    relatedSkills: [1], // Core Django Concepts
    resources: {
      documentation:
        "https://docs.djangoproject.com/en/stable/ref/contrib/admin/",
    },
  },
  {
    id: 3,
    title: "Integrating Third-Party Libraries",
    content:
      "Indicates practical efficiency and awareness of industry standards. Leverage libraries like DRF for APIs, Celery for background tasks, and Channels for real-time features.",
    relevance: [
      "API for mobile apps",
      "Sending bulk emails",
      "Real-time chat features",
    ],
    difficulty: "Intermediate",
    category: "Integration",
    icon: "package",
    useCases: [
      {
        title: "Payment Gateway Integration",
        description: "Adding Stripe or PayPal payment processing",
        implementationTips: [
          "Use django-allauth for social auth",
          "Consider django-rest-framework for APIs",
          "Implement proper error handling",
        ],
      },
    ],
    relatedSkills: [3, 4], // API Development and Security
    resources: {
      packages: [
        "django-rest-framework",
        "django-allauth",
        "django-celery-results",
      ],
    },
  },
  {
    id: 4,
    title: "Implementing Robust Testing",
    content:
      "A hallmark of professionalism. Showcases a commitment to code quality, reliability, and maintainability using Django's test framework or Pytest.",
    relevance: [
      "Critical business applications",
      "E-commerce platforms",
      "Financial systems",
    ],
    difficulty: "Intermediate",
    category: "Testing",
    icon: "test-tube",
    codeExample: `from django.test import TestCase
from .models import Product

class ProductTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up data for the whole TestCase
        Product.objects.create(name="Test Product", price=10.99)
    
    def test_product_creation(self):
        product = Product.objects.get(id=1)
        self.assertEqual(product.name, "Test Product")
        self.assertEqual(product.price, 10.99)`,
    useCases: [
      {
        title: "Test Coverage for Banking App",
        description: "Ensuring financial calculations are accurate",
        implementationTips: [
          "Aim for 80%+ test coverage",
          "Test edge cases thoroughly",
          "Mock external API calls",
        ],
      },
    ],
    relatedSkills: [1, 4], // Core Django and Security
    resources: {
      documentation: "https://docs.djangoproject.com/en/stable/topics/testing/",
    },
  },
  {
    id: 5,
    title: "Data Visualization",
    content:
      "Highlights the ability to process, analyze, and present data effectively. Integrate with libraries like Chart.js or Plotly to create insightful dashboards.",
    relevance: [
      "Sales dashboards",
      "User activity analytics",
      "Health tracker reports",
    ],
    difficulty: "Intermediate",
    category: "Visualization",
    icon: "bar-chart",
    useCases: [
      {
        title: "Business Intelligence Dashboard",
        description: "Visualizing key metrics for executives",
        implementationTips: [
          "Use django-plotly-dash for interactive charts",
          "Cache expensive queries",
          "Implement proper access controls",
        ],
      },
    ],
    relatedSkills: [3, 5], // API Development and Frontend
    resources: {
      packages: ["django-plotly-dash", "chart.js", "pandas"],
    },
  },
];

export default techniques;
