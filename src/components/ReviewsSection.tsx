import React, { useState } from "react";
import { Star, CheckCircle, Filter, ThumbsUp, MessageSquare, ShieldCheck, X } from "lucide-react";
import { REVIEWS_DATA } from "../data/shopData";

export const ReviewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filterTags = ["All", "no upsell", "diagnostics", "wait time", "kind staff"];

  const filteredReviews = activeFilter === "All"
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.tags.includes(activeFilter));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setWriteModalOpen(false);
      setNewReviewAuthor("");
      setNewReviewText("");
    }, 2500);
  };

  return (
    <section id="reviews" className="py-16 bg-zinc-50 text-black border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-black mb-3">
            <Star className="w-3.5 h-3.5 fill-[#84cc16] text-[#84cc16]" />
            <span>100% Verified 5.0 Customer Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
            What Boise Drivers Say About Valley Auto E.R.
          </h2>
          <p className="mt-2 text-zinc-600 text-sm sm:text-base">
            Read real Google reviews from local Boise drivers who trust Dan and the team for honest, transparent auto repair.
          </p>
        </div>

        {/* Rating Breakdown & Highlights Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-zinc-200 shadow-lg mb-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* 5.0 Big Rating Box */}
            <div className="md:col-span-4 text-center md:border-r border-zinc-200 md:pr-8">
              <div className="text-5xl font-black text-black tracking-tight">5.0</div>
              <div className="flex justify-center my-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-600 font-bold">32 Verified Google Reviews</p>

              {/* Star Distribution Histogram */}
              <div className="mt-4 space-y-1 text-xs text-zinc-500 max-w-xs mx-auto">
                <div className="flex items-center space-x-2">
                  <span className="w-3 font-black text-black">5</span>
                  <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-full rounded-full"></div>
                  </div>
                  <span className="w-8 text-right font-black text-black">100%</span>
                </div>
                {[4, 3, 2, 1].map(num => (
                  <div key={num} className="flex items-center space-x-2 opacity-40">
                    <span className="w-3">{num}</span>
                    <div className="flex-1 h-2 bg-zinc-200 rounded-full"></div>
                    <span className="w-8 text-right">0%</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setWriteModalOpen(true)}
                className="mt-6 px-4 py-2 rounded-xl bg-black hover:bg-zinc-800 text-white font-black text-xs shadow transition-colors inline-flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Write a Review</span>
              </button>
            </div>

            {/* Direct Real Quotes Highlight Grid */}
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-black">
                Frequent Review Quotes
              </h3>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200">
                  <p className="text-zinc-800 font-medium italic">
                    "No shadiness.. no scammers.. trust worthy service..."
                  </p>
                </div>
                <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200">
                  <p className="text-zinc-800 font-medium italic">
                    "Clear and concise explanation of what was needed."
                  </p>
                </div>
                <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200">
                  <p className="text-zinc-800 font-medium italic">
                    "Super nice people great customer service."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black text-black flex items-center mr-1">
              <Filter className="w-3.5 h-3.5 mr-1 text-black" /> Filter:
            </span>
            {filterTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === tag
                    ? "bg-black text-white shadow"
                    : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300"
                }`}
              >
                {tag === "All" ? "All Reviews" : `# ${tag}`}
              </button>
            ))}
          </div>

          <span className="text-xs text-zinc-600 font-bold">
            Showing {filteredReviews.length} reviews
          </span>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border-2 border-zinc-200 hover:border-black transition-all shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-black text-white font-black text-sm flex items-center justify-center">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-sm text-black flex items-center space-x-1.5">
                        <span>{review.author}</span>
                        {review.verifiedLocal && (
                          <CheckCircle className="w-3.5 h-3.5 text-black" title="Verified Google Review" />
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-500 font-medium">{review.reviewerInfo}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-semibold">{review.date}</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Tags & Action Footer */}
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {review.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-100 text-[10px] text-black font-bold border border-zinc-200">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-zinc-500 text-xs font-semibold">
                  <button className="hover:text-black transition-colors flex items-center">
                    <ThumbsUp className="w-3 h-3 mr-1" />
                    <span>Like</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {writeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-black w-full max-w-lg rounded-2xl p-6 shadow-2xl relative text-black">
            <button
              onClick={() => setWriteModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-black p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-black text-black mb-1">
              Write a Review for Valley Auto E.R.
            </h3>
            <p className="text-xs text-zinc-600 mb-6 font-medium">
              Share your experience with Dan and the team on Google.
            </p>

            {submittedMessage ? (
              <div className="bg-zinc-100 border border-black p-6 rounded-xl text-center space-y-2">
                <ShieldCheck className="w-10 h-10 text-black mx-auto" />
                <h4 className="text-base font-black text-black">Thank You for Your Review!</h4>
                <p className="text-xs text-zinc-700 font-medium">
                  Your feedback helps Boise drivers find honest, reliable auto repair.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={newReviewAuthor}
                    onChange={e => setNewReviewAuthor(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-2.5 text-sm text-black font-semibold focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">
                    Star Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className="p-1"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= newReviewRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-zinc-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">
                    Your Experience
                  </label>
                  <textarea
                    value={newReviewText}
                    onChange={e => setNewReviewText(e.target.value)}
                    rows={4}
                    placeholder="How was your service with Dan and Valley Auto E.R.?"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-2.5 text-sm text-black font-medium focus:outline-none focus:border-black"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-black text-sm shadow"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
